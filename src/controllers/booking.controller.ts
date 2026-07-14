import type { Request, Response } from 'express';
import { Booking } from '../models/booking.model.js';
import { Place } from '../models/place.model.js';

export async function createBooking(req: Request, res: Response) {
    const { placeId, seats, departureDate, departureTime, contactInfo } = req.body;

    const place = await Place.findById(placeId);
    if (!place) return res.status(404).json({ message: 'Place not found' });

    const requestedDate = new Date(departureDate).toDateString();
    const isValidDate = place.availableDates.some(d => new Date(d).toDateString() === requestedDate);
    if (!isValidDate) {
        return res.status(400).json({ message: 'Selected date is not available for this place' });
    }

    const booking = await Booking.create({
        userId: req.user!.id, placeId, seats, departureDate, departureTime, contactInfo, status: 'pending',
    });

    await Place.findByIdAndUpdate(placeId, { $inc: { bookingsCount: 1 } });

    res.status(201).json(booking);
}

export async function getMyBookings(req: Request, res: Response) {
    const bookings = await Booking.find({ userId: req.user!.id }).populate('placeId', 'title images location').sort({ createdAt: -1 });
    res.json(bookings);
}

export async function cancelMyBooking(req: Request, res: Response) {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    if (booking.userId.toString() !== req.user!.id) return res.status(403).json({ message: 'Not allowed' });
    if (booking.status !== 'pending') {
        return res.status(400).json({ message: 'Only pending bookings can be cancelled' });
    }
    booking.status = 'cancelled';
    await booking.save();
    res.json(booking);
}

// --- Admin ---
export async function getAllBookings(req: Request, res: Response) {
    const { status } = req.query;
    const filter: Record<string, any> = {};
    if (status) filter.status = status;
    const bookings = await Booking.find(filter)
        .populate('userId', 'name email')
        .populate('placeId', 'title')
        .sort({ createdAt: -1 });
    res.json(bookings);
}

export async function updateBookingStatus(req: Request, res: Response) {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
}

export async function acceptBooking(req: Request, res: Response) {
    const { adminConfirmedTime } = req.body;
    const booking = await Booking.findByIdAndUpdate(
        req.params.id,
        { status: 'confirmed', ...(adminConfirmedTime && { adminConfirmedTime }) },
        { new: true }
    );
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
}

export async function deleteBooking(req: Request, res: Response) {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(204).send();
}