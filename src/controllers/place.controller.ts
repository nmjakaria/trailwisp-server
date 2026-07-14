import type { Request, Response } from 'express';
import { Place } from '../models/place.model.js';

export async function getPlaces(req: Request, res: Response) {
    try {
        const {
            search,
            category,
            minPrice,
            maxPrice,
            rating,
            location,
            sort,
            featured,
            page = '1',
            limit = '12'
        } = req.query;

        const filter: Record<string, any> = {};

        //  YOUR NEW SEARCH LOGIC: Works beautifully for partial phrase cross-matching
        if (search) {
            filter.$or = [
                { title: { $regex: String(search), $options: 'i' } },
                { location: { $regex: String(search), $options: 'i' } },
            ];
        }

        if (category) filter.category = category;

        if (location) filter.location = { $regex: String(location), $options: 'i' };

        if (rating) filter.rating = { $gte: Number(rating) };

        // 🛠️ FIX: Stabilized target assignment prevents value stripping or injection anomalies
        if (minPrice || maxPrice) {
            const priceConditions: Record<string, number> = {};
            if (minPrice) priceConditions.$gte = Number(minPrice);
            if (maxPrice) priceConditions.$lte = Number(maxPrice);
            filter.price = priceConditions;
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

        const pageNum = Math.max(1, Number(page));
        const limitNum = Math.max(1, Number(limit));

        const [places, total] = await Promise.all([
            Place.find(filter)
                .sort(sortBy)
                .skip((pageNum - 1) * limitNum)
                .limit(limitNum),
            Place.countDocuments(filter),
        ]);

        return res.status(200).json({
            success: true,
            data: places,
            total,
            page: pageNum,
            totalPages: Math.ceil(total / limitNum)
        });

    } catch (error: any) {
        console.error("Error in getPlaces server controller:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error while evaluating query criteria filters."
        });
    }
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