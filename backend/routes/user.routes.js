import express from 'express';
import proectedRoute from '../middleware/protectedRoute.js';
import { getUsersForSidebar } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', proectedRoute, getUsersForSidebar);

export default router;
