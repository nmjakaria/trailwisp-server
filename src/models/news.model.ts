import { Schema, model, type InferSchemaType } from 'mongoose';

const newsSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export type INews = InferSchemaType<typeof newsSchema>;
export const News = model<INews>('News', newsSchema);