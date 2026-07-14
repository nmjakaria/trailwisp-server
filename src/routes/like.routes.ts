import { Router } from 'express';
import { toggleLike, getLikeStatus } from '../controllers/like.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/', verifyJWT, asyncHandler(toggleLike));
router.get('/:targetType/:targetId', verifyJWT, asyncHandler(getLikeStatus));

export default router;