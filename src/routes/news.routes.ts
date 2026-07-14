import { Router } from 'express';
import { getNews, createNews } from '../controllers/news.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { requireAdmin } from '../middlewares/role.middleware.js';

const router = Router();

router.get('/', asyncHandler(getNews));
router.post('/', verifyJWT, requireAdmin, asyncHandler(createNews));

export default router;
