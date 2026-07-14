import { Schema, model, type InferSchemaType } from 'mongoose';

const likeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    targetId: { type: Schema.Types.ObjectId, required: true },
    targetType: { type: String, enum: ['place', 'story'], required: true },
}, { timestamps: true });

likeSchema.index({ userId: 1, targetId: 1, targetType: 1 }, { unique: true });

export type ILike = InferSchemaType<typeof likeSchema>;
export const Like = model<ILike>('Like', likeSchema);