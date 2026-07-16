import { News } from '../models/news.model.js';
export async function getLatestNews(req, res) {
    const news = await News.find().sort({ createdAt: -1 }).limit(10);
    res.json(news);
}
export async function getAllNews(req, res) {
    const { page = '1', limit = '20' } = req.query;
    const pageNum = Math.max(1, Number(page));
    const limitNum = Math.max(1, Number(limit));
    const [news, total] = await Promise.all([
        News.find()
            .populate('createdBy', 'name email')
            .sort({ createdAt: -1 })
            .skip((pageNum - 1) * limitNum)
            .limit(limitNum),
        News.countDocuments(),
    ]);
    res.json({
        data: news,
        total,
        page: pageNum,
        totalPages: Math.ceil(total / limitNum),
    });
}
export async function createNews(req, res) {
    const { title, content, badgeText, linkUrl } = req.body;
    const news = await News.create({
        title,
        content,
        badgeText,
        linkUrl,
        createdBy: req.user.id,
    });
    res.status(201).json(news);
}
export async function deleteNews(req, res) {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news)
        return res.status(404).json({ message: 'News item not found' });
    res.status(204).send();
}
//# sourceMappingURL=news.controller.js.map