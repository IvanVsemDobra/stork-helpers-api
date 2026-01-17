import createHttpError from 'http-errors';
import crypto from 'crypto';
import { User } from '../models/user.model.js';
import { sendVerifyEmail } from '../services/emailService.js';

/**
 * GET /users/me
 */
export const getCurrentUser = async (req, res) => {
  res.status(200).json(req.user);
};

/**
 * PATCH /users/me
 * Оновлення профілю користувача (name, dueDate, email, theme)
 */
export const updateUser = async (req, res, next) => {
  try {
    const { name, dueDate, email, theme } = req.body;

    // ❗ нічого не передали
    if (!name && !dueDate && !email && !theme) {
      throw createHttpError(400, 'No data to update');
    }

    const updateData = {};

    if (name) updateData.name = name;
    if (dueDate) updateData.dueDate = dueDate;

    // 🎨 theme — частина профілю
    if (theme) {
      if (!['girl', 'boy', 'neutral'].includes(theme)) {
        throw createHttpError(400, 'Invalid theme');
      }
      updateData.theme = theme;
    }

    // 🔐 якщо змінюють email — запускаємо верифікацію
    if (email) {
      const token = crypto.randomBytes(32).toString('hex');

      updateData.pendingEmail = email;
      updateData.emailVerifyToken = token;
      updateData.emailVerifyExpires = Date.now() + 60 * 60 * 1000; // 1 година

      await sendVerifyEmail(email, token);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      updateData,
      { new: true }
    );

    if (!updatedUser) {
      throw createHttpError(404, 'User not found');
    }

    res.status(200).json({
      message: email
        ? 'Confirm new email via message'
        : 'Profile updated',
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /users/verify-email/:token
 */
export const verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({
      emailVerifyToken: token,
      emailVerifyExpires: { $gt: Date.now() },
    });

    if (!user) {
      throw createHttpError(400, 'Invalid or expired token');
    }

    user.email = user.pendingEmail;
    user.pendingEmail = undefined;
    user.emailVerifyToken = undefined;
    user.emailVerifyExpires = undefined;

    await user.save();

    res.status(200).json({
      message: 'Email successfully verified',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PATCH /users/avatar
 */
export const updateUserAvatar = async (req, res, next) => {
  try {
    if (!req.file) {
      throw createHttpError(400, 'Avatar file is required');
    }

    const avatar = req.file.buffer.toString('base64');

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { avatar },
      { new: true }
    );

    if (!updatedUser) {
      throw createHttpError(404, 'User not found');
    }

    res.status(200).json({
      avatar: updatedUser.avatar,
    });
  } catch (error) {
    next(error);
  }
};
