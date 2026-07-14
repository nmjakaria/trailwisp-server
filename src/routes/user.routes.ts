import { Router } from 'express';
import { getUsers, createUser } from '../controllers/user.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

router.get('/', asyncHandler(getUsers));
router.post('/', asyncHandler(createUser));

export default router;