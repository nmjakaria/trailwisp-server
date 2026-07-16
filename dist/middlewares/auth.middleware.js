import { createRemoteJWKSet, jwtVerify } from 'jose-cjs';
let jwks = null;
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
export async function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const { payload } = await jwtVerify(token, getJWKS());
        req.user = {
            id: (payload.id || payload.sub),
            email: payload.email,
            role: payload.role || 'user',
            isBlocked: Boolean(payload.isBlocked),
        };
        next();
    }
    catch {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}
//# sourceMappingURL=auth.middleware.js.map