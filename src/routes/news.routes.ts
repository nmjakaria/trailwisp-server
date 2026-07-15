import { Router } from 'express';
import { getLatestNews, getAllNews, createNews, deleteNews } from '../controllers/news.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { requireAdmin } from '../middlewares/role.middleware.js';

const router = Router();

router.get('/latest', asyncHandler(getLatestNews));                   
router.get('/all', verifyJWT, requireAdmin, asyncHandler(getAllNews));
router.post('/', verifyJWT, requireAdmin, asyncHandler(createNews));
router.delete('/:id', verifyJWT, requireAdmin, asyncHandler(deleteNews));

export default router;