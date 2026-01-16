import createHttpError from 'http-errors';
import crypto from 'crypto';
import { User } from '../models/user.model.js';
import { sendVerifyEmail } from '../services/emailService.js';

export const getCurrentUser = async (req, res) => {
  res.status(200).json(req.user);
};


export const updateUser = async (req, res, next) => {
  try {
    const { name, dueDate, email } = req.body;

    if (!name && !dueDate && !email) {
      throw createHttpError(400, 'No data to update');
    }

    const updateData = {};

    if (name) updateData.name = name;
    if (dueDate) updateData.dueDate = dueDate;

    // 🔐 якщо змінюють email — запускаємо верифікацію
    if (email) {
      const token = crypto.randomBytes(32).toString('hex');

      updateData.pendingEmail = email;
      updateData.emailVerifyToken = token;
      updateData.emailVerifyExpires = Date.now() + 60 * 60 * 1000; // 1 година

      await sendVerifyEmail(email, token);
    }

    await User.findByIdAndUpdate(req.user._id, updateData);

    res.status(200).json({
      message: email
        ? 'Confirm new email via message'
        : 'Profile updated',
    });
  } catch (error) {
    next(error);
  }
};

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

export const updateUserTheme = async (req, res, next) => {
  try {
    const { theme } = req.body;

    if (!['girl', 'boy', 'neutral'].includes(theme)) {
      throw createHttpError(400, 'Invalid theme');
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { theme },
      { new: true }
    );

    res.status(200).json({ theme: user.theme });
  } catch (error) {
    next(error);
  }
};
