import { Router } from 'express';
import { getPublicStats, getAdminStats } from '../controllers/stats.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { requireAdmin } from '../middlewares/role.middleware.js';
const router = Router();
router.get('/public', asyncHandler(getPublicStats));
router.get('/admin', verifyJWT, requireAdmin, asyncHandler(getAdminStats));
export default router;
//# sourceMappingURL=stats.routes.js.map