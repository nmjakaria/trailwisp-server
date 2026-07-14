import { Router } from 'express';
import { addToWishlist, getMyWishlist, removeFromWishlist } from '../controllers/wishlist.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/', verifyJWT, asyncHandler(addToWishlist));
router.get('/mine', verifyJWT, asyncHandler(getMyWishlist));
router.delete('/:id', verifyJWT, asyncHandler(removeFromWishlist));

export default router;