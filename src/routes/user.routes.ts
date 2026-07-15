import { Router } from 'express';
import { getAllUsers, updateUserRole, deleteUser } from '../controllers/user.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { requireAdmin } from '../middlewares/role.middleware.js';

const router = Router();

router.get('/', verifyJWT, requireAdmin, asyncHandler(getAllUsers));
router.patch('/:id/role', verifyJWT, requireAdmin, asyncHandler(updateUserRole));
router.delete('/:id', verifyJWT, requireAdmin, asyncHandler(deleteUser));

export default router;