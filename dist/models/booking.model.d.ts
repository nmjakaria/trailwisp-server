import { Schema, type InferSchemaType } from 'mongoose';
declare const bookingSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: import("mongoose").Types.ObjectId;
    placeId: import("mongoose").Types.ObjectId;
    seats: number;
    departureDate: NativeDate;
    departureTime: string;
    contactInfo?: {
        fullName: string;
        phone: string;
        email: string;
    } | null;
    pricePerSeat: number;
    totalPrice: number;
    status: "cancelled" | "confirmed" | "pending";
    adminConfirmedTime?: string | null;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    placeId: import("mongoose").Types.ObjectId;
    seats: number;
    departureDate: NativeDate;
    departureTime: string;
    contactInfo?: {
        fullName: string;
        phone: string;
        email: string;
    } | null;
    pricePerSeat: number;
    totalPrice: number;
    status: "cancelled" | "confirmed" | "pending";
    adminConfirmedTime?: string | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    userId: import("mongoose").Types.ObjectId;
    placeId: import("mongoose").Types.ObjectId;
    seats: number;
    departureDate: NativeDate;
    departureTime: string;
    contactInfo?: {
        fullName: string;
        phone: string;
        email: string;
    } | null;
    pricePerSeat: number;
    totalPrice: number;
    status: "cancelled" | "confirmed" | "pending";
    adminConfirmedTime?: string | null;
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
    placeId: import("mongoose").Types.ObjectId;
    seats: number;
    departureDate: NativeDate;
    departureTime: string;
    contactInfo?: {
        fullName: string;
        phone: string;
        email: string;
    } | null;
    pricePerSeat: number;
    totalPrice: number;
    status: "cancelled" | "confirmed" | "pending";
    adminConfirmedTime?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type IBooking = InferSchemaType<typeof bookingSchema>;
export declare const Booking: import("mongoose").Model<{
    userId: import("mongoose").Types.ObjectId;
    placeId: import("mongoose").Types.ObjectId;
    seats: number;
    departureDate: NativeDate;
    departureTime: string;
    contactInfo?: {
        fullName: string;
        phone: string;
        email: string;
    } | null;
    pricePerSeat: number;
    totalPrice: number;
    status: "cancelled" | "confirmed" | "pending";
    adminConfirmedTime?: string | null;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    placeId: import("mongoose").Types.ObjectId;
    seats: number;
    departureDate: NativeDate;
    departureTime: string;
    contactInfo?: {
        fullName: string;
        phone: string;
        email: string;
    } | null;
    pricePerSeat: number;
    totalPrice: number;
    status: "cancelled" | "confirmed" | "pending";
    adminConfirmedTime?: string | null;
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    userId: import("mongoose").Types.ObjectId;
    placeId: import("mongoose").Types.ObjectId;
    seats: number;
    departureDate: NativeDate;
    departureTime: string;
    contactInfo?: {
        fullName: string;
        phone: string;
        email: string;
    } | null;
    pricePerSeat: number;
    totalPrice: number;
    status: "cancelled" | "confirmed" | "pending";
    adminConfirmedTime?: string | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, {
    userId: import("mongoose").Types.ObjectId;
    placeId: import("mongoose").Types.ObjectId;
    seats: number;
    departureDate: NativeDate;
    departureTime: string;
    contactInfo?: {
        fullName: string;
        phone: string;
        email: string;
    } | null;
    pricePerSeat: number;
    totalPrice: number;
    status: "cancelled" | "confirmed" | "pending";
    adminConfirmedTime?: string | null;
} & import("mongoose").DefaultTimestampProps>;
export {};
//# sourceMappingURL=booking.model.d.ts.map