import { Router } from 'express';
import { getStories, getStoryById, createStory, updateStory, deleteStory, toggleFeatureStory } from '../controllers/story.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { requireAdmin, requireNotBlocked } from '../middlewares/role.middleware.js';

const router = Router();

router.get('/', asyncHandler(getStories));
router.get('/:id', asyncHandler(getStoryById));
router.post('/', verifyJWT, requireNotBlocked, asyncHandler(createStory));
router.put('/:id', verifyJWT, requireNotBlocked, asyncHandler(updateStory));
router.delete('/:id', verifyJWT, asyncHandler(deleteStory));
router.patch('/:id/feature', verifyJWT, requireAdmin, asyncHandler(toggleFeatureStory));

export default router;