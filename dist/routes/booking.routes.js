import { Router } from 'express';
import { createBooking, getMyBookings, cancelMyBooking, getAllBookings, updateBookingStatus, acceptBooking, deleteBooking, } from '../controllers/booking.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { requireAdmin, requireNotBlocked } from '../middlewares/role.middleware.js';
const router = Router();
// user routes
router.post('/', verifyJWT, requireNotBlocked, asyncHandler(createBooking));
router.get('/mine', verifyJWT, asyncHandler(getMyBookings));
router.delete('/:id', verifyJWT, asyncHandler(cancelMyBooking));
// admin routes (mounted separately under /api/admin/bookings in routes/index.ts)
export const adminBookingRouter = Router();
adminBookingRouter.get('/', verifyJWT, requireAdmin, asyncHandler(getAllBookings));
adminBookingRouter.put('/:id/status', verifyJWT, requireAdmin, asyncHandler(updateBookingStatus));
adminBookingRouter.put('/:id/accept', verifyJWT, requireAdmin, asyncHandler(acceptBooking));
adminBookingRouter.delete('/:id', verifyJWT, requireAdmin, asyncHandler(deleteBooking));
export default router;
//# sourceMappingURL=booking.routes.js.map