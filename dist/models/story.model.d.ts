import { Schema, type InferSchemaType } from 'mongoose';
declare const storySchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: import("mongoose").Types.ObjectId;
    title: string;
    shortDescription: string;
    content: string;
    images: string[];
    destinationTag: string;
    likesCount: number;
    isFeatured: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    title: string;
    shortDescription: string;
    content: string;
    images: string[];
    destinationTag: string;
    likesCount: number;
    isFeatured: boolean;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    userId: import("mongoose").Types.ObjectId;
    title: string;
    shortDescription: string;
    content: string;
    images: string[];
    destinationTag: string;
    likesCount: number;
    isFeatured: boolean;
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
    title: string;
    shortDescription: string;
    content: string;
    images: string[];
    destinationTag: string;
    likesCount: number;
    isFeatured: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type IStory = InferSchemaType<typeof storySchema>;
export declare const Story: import("mongoose").Model<{
    userId: import("mongoose").Types.ObjectId;
    title: string;
    shortDescription: string;
    content: string;
    images: string[];
    destinationTag: string;
    likesCount: number;
    isFeatured: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    title: string;
    shortDescription: string;
    content: string;
    images: string[];
    destinationTag: string;
    likesCount: number;
    isFeatured: boolean;
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    userId: import("mongoose").Types.ObjectId;
    title: string;
    shortDescription: string;
    content: string;
    images: string[];
    destinationTag: string;
    likesCount: number;
    isFeatured: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, {
    userId: import("mongoose").Types.ObjectId;
    title: string;
    shortDescription: string;
    content: string;
    images: string[];
    destinationTag: string;
    likesCount: number;
    isFeatured: boolean;
} & import("mongoose").DefaultTimestampProps>;
export {};
//# sourceMappingURL=story.model.d.ts.map