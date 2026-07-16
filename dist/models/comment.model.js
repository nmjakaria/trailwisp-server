import { Schema, model } from 'mongoose';
const commentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    targetId: { type: Schema.Types.ObjectId, required: true },
    targetType: { type: String, enum: ['place', 'story'], required: true },
    text: { type: String, required: true },
    isBestComment: { type: Boolean, default: false },
}, { timestamps: true });
export const Comment = model('Comment', commentSchema);
//# sourceMappingURL=comment.model.js.map