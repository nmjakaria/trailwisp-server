import { Schema, type InferSchemaType } from 'mongoose';
declare const likeSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
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
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type ILike = InferSchemaType<typeof likeSchema>;
export declare const Like: import("mongoose").Model<{
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    userId: import("mongoose").Types.ObjectId;
    targetId: import("mongoose").Types.ObjectId;
    targetType: "place" | "story";
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
} & import("mongoose").DefaultTimestampProps>;
export {};
//# sourceMappingURL=like.model.d.ts.map