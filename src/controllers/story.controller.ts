import type { Request, Response } from 'express';
import { Story } from '../models/story.model.js';

export async function getStories(req: Request, res: Response) {
    const { search, destinationTag, sort, featured } = req.query;
    const filter: Record<string, any> = {};
    if (search) filter.title = { $regex: String(search), $options: 'i' };
    if (destinationTag) filter.destinationTag = destinationTag;
    if (featured === 'true') filter.isFeatured = true;

    const sortBy = sort === 'mostLiked' ? { likesCount: -1 } : { createdAt: -1 };
    const stories = await Story.find(filter).sort(sortBy as any).populate('userId', 'name image');
    res.json(stories);
}

export async function getStoryById(req: Request, res: Response) {
    const story = await Story.findById(req.params.id).populate('userId', 'name image');
    if (!story) return res.status(404).json({ message: 'Story not found' });
    res.json(story);
}

export async function createStory(req: Request, res: Response) {
    const story = await Story.create({ ...req.body, userId: req.user!.id });
    res.status(201).json(story);
}

export async function updateStory(req: Request, res: Response) {
    const story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ message: 'Story not found' });
    if (story.userId.toString() !== req.user!.id) {
        return res.status(403).json({ message: 'Not allowed' });
    }
    Object.assign(story, req.body);
    await story.save();
    res.json(story);
}

export async function deleteStory(req: Request, res: Response) {
    const story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ message: 'Story not found' });
    if (story.userId.toString() !== req.user!.id && req.user!.role !== 'admin') {
        return res.status(403).json({ message: 'Not allowed' });
    }
    await story.deleteOne();
    res.status(204).send();
}

export async function toggleFeatureStory(req: Request, res: Response) {
    const story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ message: 'Story not found' });
    story.isFeatured = !story.isFeatured;
    await story.save();
    res.json(story);
}
export async function getMyStories(req: Request, res: Response) {
    const stories = await Story.find({ userId: req.user!.id }).sort({ createdAt: -1 });
    res.json(stories);
}