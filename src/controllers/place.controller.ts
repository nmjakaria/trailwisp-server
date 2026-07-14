import type { Request, Response } from 'express';
import { Place } from '../models/place.model.js';

export async function getPlaces(req: Request, res: Response) {
    const { search, category, minPrice, maxPrice, rating, location, sort, featured, page = '1', limit = '12' } = req.query;

    const filter: Record<string, any> = {};
    if (search) filter.$text = { $search: String(search) };
    if (category) filter.category = category;
    if (location) filter.location = { $regex: String(location), $options: 'i' };
    if (rating) filter.rating = { $gte: Number(rating) };
    if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    if (featured === 'true') filter.isFeatured = true;

    const sortMap: Record<string, any> = {
        price_asc: { price: 1 },
        price_desc: { price: -1 },
        rating: { rating: -1 },
        newest: { createdAt: -1 },
        popular: { likesCount: -1, bookingsCount: -1 },
    };
    const sortBy = sortMap[String(sort)] || { createdAt: -1 };

    const pageNum = Number(page);
    const limitNum = Number(limit);

    const [places, total] = await Promise.all([
        Place.find(filter).sort(sortBy).skip((pageNum - 1) * limitNum).limit(limitNum),
        Place.countDocuments(filter),
    ]);

    res.json({ data: places, total, page: pageNum, totalPages: Math.ceil(total / limitNum) });
}

export async function getPlaceById(req: Request, res: Response) {
    const place = await Place.findById(req.params.id);
    if (!place) return res.status(404).json({ message: 'Place not found' });
    res.json(place);
}

export async function createPlace(req: Request, res: Response) {
    const place = await Place.create({ ...req.body, createdBy: req.user!.id });
    res.status(201).json(place);
}

export async function updatePlace(req: Request, res: Response) {
    const place = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!place) return res.status(404).json({ message: 'Place not found' });
    res.json(place);
}

export async function deletePlace(req: Request, res: Response) {
    const place = await Place.findByIdAndDelete(req.params.id);
    if (!place) return res.status(404).json({ message: 'Place not found' });
    res.status(204).send();
}

export async function toggleFeaturePlace(req: Request, res: Response) {
    const place = await Place.findById(req.params.id);
    if (!place) return res.status(404).json({ message: 'Place not found' });
    place.isFeatured = !place.isFeatured;
    await place.save();
    res.json(place);
}