import { Like } from '../models/like.model.js';
import { Place } from '../models/place.model.js';
import { Story } from '../models/story.model.js';
export async function toggleLike(req, res) {
    const { targetId, targetType } = req.body;
    const existing = await Like.findOne({ userId: req.user.id, targetId, targetType });
    const Model = targetType === 'place' ? Place : Story;
    if (existing) {
        await existing.deleteOne();
        await Model.findByIdAndUpdate(targetId, { $inc: { likesCount: -1 } });
        return res.json({ liked: false });
    }
    await Like.create({ userId: req.user.id, targetId, targetType });
    await Model.findByIdAndUpdate(targetId, { $inc: { likesCount: 1 } });
    res.json({ liked: true });
}
export async function getLikeStatus(req, res) {
    const { targetType, targetId } = req.params;
    const liked = await Like.exists({ userId: req.user.id, targetId, targetType });
    res.json({ liked: Boolean(liked) });
}
//# sourceMappingURL=like.controller.js.map