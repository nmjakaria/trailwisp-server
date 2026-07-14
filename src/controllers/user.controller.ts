import type { Request, Response } from 'express';
import { User } from '../models/user.model.js';

export async function getAllUsers(req: Request, res: Response) {
    const users = await User.find().select('name email role isBlocked createdAt');
    res.json(users);
}

export async function toggleBlockUser(req: Request, res: Response) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.isBlocked = !user.isBlocked;
    await user.save();
    res.json(user);
}