import type { Request, Response, NextFunction } from 'express';
import { createRemoteJWKSet, jwtVerify } from 'jose';

const JWKS = createRemoteJWKSet(
    new URL(`${process.env.BETTER_AUTH_URL}/api/auth/jwks`)
);

export interface AuthUser {
    id: string;
    email: string;
    role: 'user' | 'admin';
    isBlocked: boolean;
}

declare global {
    namespace Express {
        interface Request {
            user?: AuthUser;
        }
    }
}

export async function verifyJWT(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const { payload } = await jwtVerify(token as string, JWKS);
        req.user = {
            id: payload.sub as string,
            email: payload.email as string,
            role: (payload as any).role || 'user',
            isBlocked: Boolean((payload as any).isBlocked),
        };
        next();
    } catch {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}
