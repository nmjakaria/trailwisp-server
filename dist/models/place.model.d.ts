import { Schema, type InferSchemaType } from 'mongoose';
declare const placeSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    title: string;
    shortDescription: string;
    fullDescription: string;
    images: string[];
    price: number;
    location: string;
    category: "Adventure" | "Beach" | "City" | "Cultural" | "Forest" | "Hill" | "International" | "Island" | "Lake" | "Mountain" | "Nature" | "Wetland";
    duration: string;
    availableDates: NativeDate[];
    rating: number;
    likesCount: number;
    bookingsCount: number;
    isFeatured: boolean;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    title: string;
    shortDescription: string;
    fullDescription: string;
    images: string[];
    price: number;
    location: string;
    category: "Adventure" | "Beach" | "City" | "Cultural" | "Forest" | "Hill" | "International" | "Island" | "Lake" | "Mountain" | "Nature" | "Wetland";
    duration: string;
    availableDates: NativeDate[];
    rating: number;
    likesCount: number;
    bookingsCount: number;
    isFeatured: boolean;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    title: string;
    shortDescription: string;
    fullDescription: string;
    images: string[];
    price: number;
    location: string;
    category: "Adventure" | "Beach" | "City" | "Cultural" | "Forest" | "Hill" | "International" | "Island" | "Lake" | "Mountain" | "Nature" | "Wetland";
    duration: string;
    availableDates: NativeDate[];
    rating: number;
    likesCount: number;
    bookingsCount: number;
    isFeatured: boolean;
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
    shortDescription: string;
    fullDescription: string;
    images: string[];
    price: number;
    location: string;
    category: "Adventure" | "Beach" | "City" | "Cultural" | "Forest" | "Hill" | "International" | "Island" | "Lake" | "Mountain" | "Nature" | "Wetland";
    duration: string;
    availableDates: NativeDate[];
    rating: number;
    likesCount: number;
    bookingsCount: number;
    isFeatured: boolean;
    createdBy: import("mongoose").Types.ObjectId;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type IPlace = InferSchemaType<typeof placeSchema>;
export declare const Place: import("mongoose").Model<{
    title: string;
    shortDescription: string;
    fullDescription: string;
    images: string[];
    price: number;
    location: string;
    category: "Adventure" | "Beach" | "City" | "Cultural" | "Forest" | "Hill" | "International" | "Island" | "Lake" | "Mountain" | "Nature" | "Wetland";
    duration: string;
    availableDates: NativeDate[];
    rating: number;
    likesCount: number;
    bookingsCount: number;
    isFeatured: boolean;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    title: string;
    shortDescription: string;
    fullDescription: string;
    images: string[];
    price: number;
    location: string;
    category: "Adventure" | "Beach" | "City" | "Cultural" | "Forest" | "Hill" | "International" | "Island" | "Lake" | "Mountain" | "Nature" | "Wetland";
    duration: string;
    availableDates: NativeDate[];
    rating: number;
    likesCount: number;
    bookingsCount: number;
    isFeatured: boolean;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    title: string;
    shortDescription: string;
    fullDescription: string;
    images: string[];
    price: number;
    location: string;
    category: "Adventure" | "Beach" | "City" | "Cultural" | "Forest" | "Hill" | "International" | "Island" | "Lake" | "Mountain" | "Nature" | "Wetland";
    duration: string;
    availableDates: NativeDate[];
    rating: number;
    likesCount: number;
    bookingsCount: number;
    isFeatured: boolean;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, {
    title: string;
    shortDescription: string;
    fullDescription: string;
    images: string[];
    price: number;
    location: string;
    category: "Adventure" | "Beach" | "City" | "Cultural" | "Forest" | "Hill" | "International" | "Island" | "Lake" | "Mountain" | "Nature" | "Wetland";
    duration: string;
    availableDates: NativeDate[];
    rating: number;
    likesCount: number;
    bookingsCount: number;
    isFeatured: boolean;
    createdBy: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps>;
export {};
//# sourceMappingURL=place.model.d.ts.map