import { Router } from 'express';
import placeRoutes from './place.routes.js';
import storyRoutes from './story.routes.js';
import bookingRoutes, { adminBookingRouter } from './booking.routes.js';
import wishlistRoutes from './wishlist.routes.js';
import likeRoutes from './like.routes.js';
import commentRoutes from './comment.routes.js';
import newsRoutes from './news.routes.js';
import userRoutes from './user.routes.js';
import statsRoutes from './stats.routes.js';

const router = Router();

router.use('/places', placeRoutes);
router.use('/stories', storyRoutes);
router.use('/bookings', bookingRoutes);
router.use('/admin/bookings', adminBookingRouter);
router.use('/wishlist', wishlistRoutes);
router.use('/likes', likeRoutes);
router.use('/comments', commentRoutes);
router.use('/news', newsRoutes);
router.use('/admin/users', userRoutes);
router.use('/stats', statsRoutes);

export default router;