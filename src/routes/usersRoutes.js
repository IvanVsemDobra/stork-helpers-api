import express from 'express';
import {
  getCurrentUser,
  updateUser,
  updateUserAvatar,
} from '../controllers/usersController.js';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/upload.js';
import { emailRateLimit } from '../middlewares/rateLimit.js';

const router = express.Router(); // ОБОВʼЯЗКОВО ДО ВСІХ router.patch / router.get

/**
 * GET current user
 */
router.get('/me', authenticate, getCurrentUser);

/**
 * UPDATE user profile
 * body: { name, dueDate, theme, email }
 * email → з верифікацією + rate limit
 */
router.patch(
  '/me',
  authenticate,
  emailRateLimit,
  updateUser
);

/**
 * UPDATE user avatar
 * form-data: avatar
 */
router.patch(
  '/avatar',
  authenticate,
  upload.single('avatar'),
  updateUserAvatar
);

export default router;

