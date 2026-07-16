import { User } from '../models/user.model.js';
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
export async function getAllUsers(req, res) {
    const { page = '1', limit = '10', search } = req.query;
    const pageNum = Math.max(1, Number(page));
    const limitNum = Math.min(100, Math.max(1, Number(limit))); // ← cap added
    const filter = {};
    if (search) {
        filter.$or = [
            { name: { $regex: String(search), $options: 'i' } },
            { email: { $regex: String(search), $options: 'i' } },
        ];
    }
    const [users, total] = await Promise.all([
        User.find(filter)
            .select('name email role isBlocked createdAt')
            .sort({ createdAt: -1 })
            .skip((pageNum - 1) * limitNum)
            .limit(limitNum),
        User.countDocuments(filter),
    ]);
    // ফ্রন্টএন্ডের প্রত্যাশিত shape-এ transform করা হচ্ছে (isBlocked → status)
    const transformed = users.map((u) => ({
        _id: u._id,
        name: u.name,
        email: u.email,
        role: u.role,
        status: u.isBlocked ? 'suspended' : 'active',
        createdAt: u.createdAt,
    }));
    res.json({
        users: transformed,
        totalPages: Math.ceil(total / limitNum),
        currentPage: pageNum,
        totalUsers: total,
    });
}
export async function updateUserRole(req, res) {
    const { role } = req.body;
    if (!['user', 'admin', 'moderator'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role value' });
    }
    // 🔒 prevent an admin from changing their own role (self-lockout / privilege drop)
    if (req.params.id === String(req.user?._id)) {
        return res.status(400).json({ message: 'You cannot change your own role' });
    }
    const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true }).select('name email role isBlocked createdAt');
    if (!user)
        return res.status(404).json({ message: 'User not found' });
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.isBlocked ? 'suspended' : 'active',
        createdAt: user.createdAt,
    });
}
export async function deleteUser(req, res) {
    // 🔒 prevent an admin from deleting their own account
    if (req.params.id === String(req.user?._id)) {
        return res.status(400).json({ message: 'You cannot delete your own account' });
    }
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user)
        return res.status(404).json({ message: 'User not found' });
    res.json({ success: true, message: 'User deleted successfully' });
}
//# sourceMappingURL=user.controller.js.map