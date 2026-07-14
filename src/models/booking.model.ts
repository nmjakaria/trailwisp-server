import { Schema, model, type InferSchemaType } from 'mongoose';

const bookingSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    placeId: { type: Schema.Types.ObjectId, ref: 'Place', required: true },
    seats: { type: Number, required: true, min: 1, max: 6 },
    departureDate: { type: Date, required: true },
    departureTime: { type: String, required: true },
    contactInfo: {
        fullName: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
    },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    adminConfirmedTime: { type: String },
}, { timestamps: true });

export type IBooking = InferSchemaType<typeof bookingSchema>;
export const Booking = model<IBooking>('Booking', bookingSchema);