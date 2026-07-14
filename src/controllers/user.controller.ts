import type { Request, Response } from 'express';
import { User } from '../models/user.model.js';

export async function getUsers(req: Request, res: Response) {
    const users = await User.find();
    res.json(users);
}

export async function createUser(req: Request, res: Response) {
    const user = await User.create(req.body);
    res.status(201).json(user);
}