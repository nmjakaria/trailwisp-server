import { Wishlist } from '../models/wishlist.model.js';
export async function addToWishlist(req, res) {
    const { placeId } = req.body;
    const existing = await Wishlist.findOne({ userId: req.user.id, placeId });
    if (existing)
        return res.status(409).json({ message: 'Already in wishlist' });
    const item = await Wishlist.create({ userId: req.user.id, placeId });
    res.status(201).json(item);
}
export async function getMyWishlist(req, res) {
    const items = await Wishlist.find({ userId: req.user.id }).populate('placeId');
    res.json(items);
}
export async function removeFromWishlist(req, res) {
    const item = await Wishlist.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!item)
        return res.status(404).json({ message: 'Wishlist item not found' });
    res.status(204).send();
}
//# sourceMappingURL=wishlist.controller.js.map