import { Schema, model, type InferSchemaType } from 'mongoose';

const newsSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    badgeText: { type: String },
    linkUrl: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export type INews = InferSchemaType<typeof newsSchema>;
export const News = model<INews>('News', newsSchema);