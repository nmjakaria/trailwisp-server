import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    name: String,
    email: String,
    image: String,
    bio: String,
    role: { type: String, enum: ['user', 'admin', 'moderator'], default: 'user' }, // ← moderator যোগ হলো
    isBlocked: { type: Boolean, default: false },
}, { collection: 'user', timestamps: true, strict: false });
export const User = model('User', userSchema);
//# sourceMappingURL=user.model.js.map