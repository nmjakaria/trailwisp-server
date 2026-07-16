import { Schema, type InferSchemaType } from 'mongoose';
declare const userSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    collection: string;
    timestamps: true;
    strict: false;
}, {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    bio?: string | null;
    role: "admin" | "moderator" | "user";
    isBlocked: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    bio?: string | null;
    role: "admin" | "moderator" | "user";
    isBlocked: boolean;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "collection" | "strict" | "timestamps"> & {
    collection: string;
    timestamps: true;
    strict: false;
}> & Omit<{
    name?: string | null;
    email?: string | null;
    image?: string | null;
    bio?: string | null;
    role: "admin" | "moderator" | "user";
    isBlocked: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    bio?: string | null;
    role: "admin" | "moderator" | "user";
    isBlocked: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type IUser = InferSchemaType<typeof userSchema>;
export declare const User: import("mongoose").Model<{
    name?: string | null;
    email?: string | null;
    image?: string | null;
    bio?: string | null;
    role: "admin" | "moderator" | "user";
    isBlocked: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    bio?: string | null;
    role: "admin" | "moderator" | "user";
    isBlocked: boolean;
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    bio?: string | null;
    role: "admin" | "moderator" | "user";
    isBlocked: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    bio?: string | null;
    role: "admin" | "moderator" | "user";
    isBlocked: boolean;
} & import("mongoose").DefaultTimestampProps>;
export {};
//# sourceMappingURL=user.model.d.ts.map