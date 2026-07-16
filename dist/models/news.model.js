import { Schema, model } from 'mongoose';
const newsSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    badgeText: { type: String },
    linkUrl: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });
export const News = model('News', newsSchema);
//# sourceMappingURL=news.model.js.map