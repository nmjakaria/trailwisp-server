import type { Request, Response } from 'express';
import { Comment, type IComment } from '../models/comment.model.js';

export async function createComment(req: Request, res: Response) {
    const { targetId, targetType, text } = req.body;
    const comment = await Comment.create({ userId: req.user!.id, targetId, targetType, text });
    res.status(201).json(comment);
}

export async function getAllComments(req: Request, res: Response) {
    const { targetType, page = '1', limit = '20' } = req.query;
    const filter: Record<string, any> = {};
    if (targetType) filter.targetType = targetType;
    const pageNum = Math.max(1, Number(page));
    const limitNum = Math.max(1, Number(limit));
    const [comments, total] = await Promise.all([
        Comment.find(filter)
            .populate('userId', 'name email image')
            .sort({ createdAt: -1 })
            .skip((pageNum - 1) * limitNum)
            .limit(limitNum),
        Comment.countDocuments(filter),
    ]);
    res.json({
        data: comments,
        total,
        page: pageNum,
        totalPages: Math.ceil(total / limitNum),
    });
}

export async function getCommentsForTarget(req: Request, res: Response) {
    const filter = { targetId: req.params.targetId as any };  // ← ফিক্স
    const comments = await Comment.find(filter)
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