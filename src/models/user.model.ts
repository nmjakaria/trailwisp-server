import { Schema, model, type InferSchemaType } from 'mongoose';

const userSchema = new Schema({
    name: String,
    email: String,
    image: String,
    bio: String,
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    isBlocked: { type: Boolean, default: false },
}, { collection: 'user', timestamps: true, strict: false });

export type IUser = InferSchemaType<typeof userSchema>;
export const User = model<IUser>('User', userSchema);