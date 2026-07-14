import { Schema, model, type InferSchemaType } from 'mongoose';

const placeSchema = new Schema({
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    images: [{ type: String, required: true }],
    price: { type: Number, required: true },
    location: { type: String, required: true },
    category: { type: String, enum: ['Beach', 'Mountain', 'City', 'Adventure', 'Cultural'], required: true },
    duration: { type: String, required: true },
    availableDates: [{ type: Date, required: true }],
    rating: { type: Number, default: 0 },
    likesCount: { type: Number, default: 0 },
    bookingsCount: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

placeSchema.index({ title: 'text', location: 'text' });

export type IPlace = InferSchemaType<typeof placeSchema>;
export const Place = model<IPlace>('Place', placeSchema);