import { Router } from 'express';
import { createComment, getCommentsForTarget, getBestComments, getAllComments, toggleBestComment, deleteComment } from '../controllers/comment.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { requireAdmin, requireNotBlocked } from '../middlewares/role.middleware.js';


const router = Router();

router.post('/', verifyJWT, requireNotBlocked, asyncHandler(createComment));
router.get('/best', asyncHandler(getBestComments));
router.get('/all', verifyJWT, requireAdmin, asyncHandler(getAllComments)); 
router.get('/:targetId', asyncHandler(getCommentsForTarget));
router.patch('/:id/feature', verifyJWT, requireAdmin, asyncHandler(toggleBestComment));
router.delete('/:id', verifyJWT, asyncHandler(deleteComment));

export default router;