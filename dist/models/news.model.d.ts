import { Schema, type InferSchemaType } from 'mongoose';
declare const newsSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    title: string;
    content: string;
    badgeText?: string | null;
    linkUrl?: string | null;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    title: string;
    content: string;
    badgeText?: string | null;
    linkUrl?: string | null;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    title: string;
    content: string;
    badgeText?: string | null;
    linkUrl?: string | null;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    title: string;
    content: string;
    badgeText?: string | null;
    linkUrl?: string | null;
    createdBy: import("mongoose").Types.ObjectId;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type INews = InferSchemaType<typeof newsSchema>;
export declare const News: import("mongoose").Model<{
    title: string;
    content: string;
    badgeText?: string | null;
    linkUrl?: string | null;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    title: string;
    content: string;
    badgeText?: string | null;
    linkUrl?: string | null;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    title: string;
    content: string;
    badgeText?: string | null;
    linkUrl?: string | null;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, {
    title: string;
    content: string;
    badgeText?: string | null;
    linkUrl?: string | null;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps>;
export {};
//# sourceMappingURL=news.model.d.ts.map