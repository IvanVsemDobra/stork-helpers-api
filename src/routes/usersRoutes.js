import express from 'express';
import {
  getCurrentUser,
  updateUser,
  updateUserAvatar,
} from '../controllers/usersController.js';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/upload.js';

const router = express.Router();

router.get('/users/me', authenticate, getCurrentUser);
router.patch('/users', authenticate, updateUser);
router.patch(
  '/users/avatar',
  authenticate,
  upload.single('avatar'),
  updateUserAvatar,
);

export default router;
