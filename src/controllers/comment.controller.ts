import type { Request, Response } from 'express';
import { Comment } from '../models/comment.model.js';

export async function createComment(req: Request, res: Response) {
    const { targetId, targetType, text } = req.body;
    const comment = await Comment.create({ userId: req.user!.id, targetId, targetType, text });
    res.status(201).json(comment);
}

export async function getCommentsForTarget(req: Request, res: Response) {
    const comments = await Comment.find({ targetId: req.params.targetId })
        .populate('userId', 'name image')
        .sort({ createdAt: -1 });
    res.json(comments);
}

export async function getBestComments(req: Request, res: Response) {
    const comments = await Comment.find({ isBestComment: true }).populate('userId', 'name image').limit(6);
    res.json(comments);
}

export async function toggleBestComment(req: Request, res: Response) {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });
    comment.isBestComment = !comment.isBestComment;
    await comment.save();
    res.json(comment);
}

export async function deleteComment(req: Request, res: Response) {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });
    if (comment.userId.toString() !== req.user!.id && req.user!.role !== 'admin') {
        return res.status(403).json({ message: 'Not allowed' });
    }
    await comment.deleteOne();
    res.status(204).send();
}