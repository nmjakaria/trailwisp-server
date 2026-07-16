import { Story } from '../models/story.model.js';
export async function getStories(req, res) {
    const { search, destinationTag, sort, featured } = req.query;
    const filter = {};
    if (search)
        filter.title = { $regex: String(search), $options: 'i' };
    if (destinationTag)
        filter.destinationTag = destinationTag;
    if (featured === 'true')
        filter.isFeatured = true;
    const sortBy = sort === 'mostLiked' ? { likesCount: -1 } : { createdAt: -1 };
    const stories = await Story.find(filter).sort(sortBy).populate('userId', 'name image');
    res.json(stories);
}
export async function getStoryById(req, res) {
    const story = await Story.findById(req.params.id).populate('userId', 'name image');
    if (!story)
        return res.status(404).json({ message: 'Story not found' });
    res.json(story);
}
export async function createStory(req, res) {
    const story = await Story.create({ ...req.body, userId: req.user.id });
    res.status(201).json(story);
}
export async function updateStory(req, res) {
    const story = await Story.findById(req.params.id);
    if (!story)
        return res.status(404).json({ message: 'Story not found' });
    if (story.userId.toString() !== req.user.id) {
        return res.status(403).json({ message: 'Not allowed' });
    }
    Object.assign(story, req.body);
    await story.save();
    res.json(story);
}
export async function deleteStory(req, res) {
    const story = await Story.findById(req.params.id);
    if (!story)
        return res.status(404).json({ message: 'Story not found' });
    if (story.userId.toString() !== req.user.id && req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Not allowed' });
    }
    await story.deleteOne();
    res.status(204).send();
}
export async function toggleFeatureStory(req, res) {
    const story = await Story.findById(req.params.id);
    if (!story)
        return res.status(404).json({ message: 'Story not found' });
    story.isFeatured = !story.isFeatured;
    await story.save();
    res.json(story);
}
export async function getMyStories(req, res) {
    const stories = await Story.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(stories);
}
//# sourceMappingURL=story.controller.js.map