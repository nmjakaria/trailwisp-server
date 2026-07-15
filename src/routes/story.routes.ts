import { Router } from 'express';
import {
    getStories,
    getStoryById,
    getMyStories,        // ← import আছে কিনা চেক করুন
    createStory,
    updateStory,
    deleteStory,
    toggleFeatureStory,
} from '../controllers/story.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { requireAdmin, requireNotBlocked } from '../middlewares/role.middleware.js';

const router = Router();

router.get('/', asyncHandler(getStories));
router.get('/mine', verifyJWT, asyncHandler(getMyStories));    // ✅ /:id-এর আগে
router.post('/', verifyJWT, requireNotBlocked, asyncHandler(createStory));
router.get('/:id', asyncHandler(getStoryById));                 // ✅ সবার নিচে
router.patch('/:id', verifyJWT, requireNotBlocked, asyncHandler(updateStory));
router.delete('/:id', verifyJWT, asyncHandler(deleteStory));
router.patch('/:id/feature', verifyJWT, requireAdmin, asyncHandler(toggleFeatureStory));

export default router;