import type { Request, Response } from 'express';
import { News } from '../models/news.model.js';

export async function getNews(req: Request, res: Response) {
    const news = await News.find().sort({ createdAt: -1 }).limit(20);
    res.json(news);
}

export async function createNews(req: Request, res: Response) {
    const news = await News.create({ ...req.body, createdBy: req.user!.id });
    res.status(201).json(news);
}