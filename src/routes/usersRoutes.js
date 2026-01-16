import express from 'express';

import {
  getCurrentUser,
  updateUser,
  updateUserAvatar,
  updateUserTheme,
  verifyEmail,
} from '../controllers/usersController.js';

import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/upload.js';
import { emailRateLimit } from '../middlewares/rateLimit.js';

const router = express.Router();

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     tags: [Users]
 *     summary: Отримати поточного користувача
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Дані користувача
 */
router.get('/me', authenticate, getCurrentUser);

/**
 * UPDATE user profile
 * body: { name, dueDate }
 * email change requires verification
 */
router.patch('/me', authenticate, emailRateLimit, updateUser);

/**
 * UPDATE user theme
 */
router.patch('/me/theme', authenticate, updateUserTheme);

/**
 * UPDATE user avatar
 * form-data: avatar
 */
router.patch(
  '/me/avatar',
  authenticate,
  upload.single('avatar'),
  updateUserAvatar
);

/**
 * VERIFY new email
 */
router.get('/verify-email/:token', verifyEmail);

export default router;
