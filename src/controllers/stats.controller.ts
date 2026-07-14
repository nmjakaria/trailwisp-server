import type { Request, Response } from 'express';
import { Place } from '../models/place.model.js';
import { Story } from '../models/story.model.js';
import { Booking } from '../models/booking.model.js';
import { User } from '../models/user.model.js';

export async function getPublicStats(req: Request, res: Response) {
    const [places, stories, users] = await Promise.all([
        Place.countDocuments(),
        Story.countDocuments(),
        User.countDocuments(),
    ]);
    res.json({ totalDestinations: places, totalStories: stories, totalTravelers: users });
}

export async function getAdminStats(req: Request, res: Response) {
    const [totalUsers, totalPlaces, totalBookings, totalStories, totalComments] = await Promise.all([
        User.countDocuments(),
        Place.countDocuments(),
        Booking.countDocuments(),
        Story.countDocuments(),
        (await import('../models/comment.model.js')).Comment.countDocuments(),
    ]);

    const bookingsOverTime = await Booking.aggregate([
        { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }, count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
    ]);

    const topDestinations = await Booking.aggregate([
        { $group: { _id: '$placeId', bookings: { $sum: 1 } } },
        { $sort: { bookings: -1 } },
        { $limit: 5 },
        { $lookup: { from: 'places', localField: '_id', foreignField: '_id', as: 'place' } },
        { $unwind: '$place' },
        { $project: { title: '$place.title', bookings: 1 } },
    ]);

    const categoryDistribution = await Place.aggregate([
        { $group: { _id: '$category', count: { $sum: 1 } } },
    ]);

    res.json({
        totals: { totalUsers, totalPlaces, totalBookings, totalStories, totalComments },
        bookingsOverTime,
        topDestinations,
        categoryDistribution,
    });
}