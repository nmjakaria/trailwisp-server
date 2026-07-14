import { Router } from 'express';
import { getPlaces, getPlaceById, createPlace, updatePlace, deletePlace, toggleFeaturePlace } from '../controllers/place.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { requireAdmin } from '../middlewares/role.middleware.js';

const router = Router();

router.get('/', asyncHandler(getPlaces));
router.get('/:id', asyncHandler(getPlaceById));
router.post('/', verifyJWT, requireAdmin, asyncHandler(createPlace));
router.patch('/:id', verifyJWT, requireAdmin, asyncHandler(updatePlace));
router.delete('/:id', verifyJWT, requireAdmin, asyncHandler(deletePlace));
router.patch('/:id/feature', verifyJWT, requireAdmin, asyncHandler(toggleFeaturePlace));

export default router;