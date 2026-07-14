import { Schema, model, type InferSchemaType } from 'mongoose';

const wishlistSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    placeId: { type: Schema.Types.ObjectId, ref: 'Place', required: true },
}, { timestamps: true });

wishlistSchema.index({ userId: 1, placeId: 1 }, { unique: true });

export type IWishlist = InferSchemaType<typeof wishlistSchema>;
export const Wishlist = model<IWishlist>('Wishlist', wishlistSchema);