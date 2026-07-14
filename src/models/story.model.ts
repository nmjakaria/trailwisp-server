import { Schema, model, type InferSchemaType } from 'mongoose';

const storySchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    content: { type: String, required: true },
    images: [{ type: String }],
    destinationTag: { type: String, required: true },
    likesCount: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
}, { timestamps: true });

export type IStory = InferSchemaType<typeof storySchema>;
export const Story = model<IStory>('Story', storySchema);