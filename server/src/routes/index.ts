import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
// import authenticateToken from '../middleware/auth.js';

const router = Router();

router.use('/auth.js', authRoutes);
// TODO: Add authentication to the API routes
router.get('/middleware/auth.js');
router.use('/api', apiRoutes);

export default router;
