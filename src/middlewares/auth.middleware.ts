import type { Request, Response, NextFunction } from 'express';
import { createRemoteJWKSet, jwtVerify } from 'jose-cjs';

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

let jwks: ReturnType<typeof createRemoteJWKSet> | null = null;

function getJWKS() {
    if (!jwks) {
        const authUrl = process.env.BETTER_AUTH_URL;
        if (!authUrl) {
            throw new Error('BETTER_AUTH_URL is not defined in .env');
        }
        jwks = createRemoteJWKSet(new URL(`${authUrl}/api/auth/jwks`));
    }
    return jwks;
}

export async function verifyJWT(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const { payload } = await jwtVerify(token as string, getJWKS());

        req.user = {
            id: (payload.id || payload.sub) as string,
            email: payload.email as string,
            role: (payload as any).role || 'user',
            isBlocked: Boolean((payload as any).isBlocked),
        };
        next();
    } catch {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}