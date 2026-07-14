import type { Request, Response, NextFunction } from 'express';

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
    if (req.user?.role !== 'admin') {
        return res.status(403).json({ message: 'Admin access required' });
    }
    next();
}

export function requireNotBlocked(req: Request, res: Response, next: NextFunction) {
    if (req.user?.isBlocked) {
        return res.status(403).json({ message: 'Your account has been blocked' });
    }
    next();
}