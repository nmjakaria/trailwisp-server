import { Schema, type InferSchemaType } from 'mongoose';
declare const commentSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
    text: string;
    isBestComment: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
    text: string;
    isBestComment: boolean;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
    text: string;
    isBestComment: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
    text: string;
    isBestComment: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type IComment = InferSchemaType<typeof commentSchema>;
export declare const Comment: import("mongoose").Model<{
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
    text: string;
    isBestComment: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
    text: string;
    isBestComment: boolean;
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
    text: string;
    isBestComment: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, {
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
    text: string;
    isBestComment: boolean;
} & import("mongoose").DefaultTimestampProps>;
export {};
//# sourceMappingURL=comment.model.d.ts.map