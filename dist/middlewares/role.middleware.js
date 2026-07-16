export function requireAdmin(req, res, next) {
    if (req.user?.role !== 'admin') {
        return res.status(403).json({ message: 'Admin access required' });
    }
    next();
}
export function requireNotBlocked(req, res, next) {
    if (req.user?.isBlocked) {
        return res.status(403).json({ message: 'Your account has been blocked' });
    }
    next();
}
//# sourceMappingURL=role.middleware.js.map