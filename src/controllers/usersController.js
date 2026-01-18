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
 */
export const updateUser = async (req, res, next) => {
  try {
    const { name, dueDate, email, theme } = req.body;

    if (!name && !dueDate && !email && !theme) {
      throw createHttpError(400, 'No data to update');
    }

    const updateData = {};

    if (name) updateData.name = name;
    if (dueDate) updateData.dueDate = dueDate;

    if (theme) {
      if (!['girl', 'boy', 'neutral'].includes(theme)) {
        throw createHttpError(400, 'Invalid theme');
      }
      updateData.theme = theme;
    }

    const emailChanged =
      typeof email === 'string' &&
      email.trim().length > 0 &&
      email !== req.user.email;

    let rawEmailToken = null;

    if (emailChanged) {
      const emailInUse = await User.findOne({ email });
      if (emailInUse) {
        throw createHttpError(409, 'Email already in use');
      }

      const last = req.user.emailChangeRequestedAt;
      if (last && Date.now() - last.getTime() < 10 * 60 * 1000) {
        throw createHttpError(
          429,
          'You can change email only once per 10 minutes'
        );
      }

      rawEmailToken = crypto.randomBytes(32).toString('hex');
      const hashedToken = crypto
        .createHash('sha256')
        .update(rawEmailToken)
        .digest('hex');

      updateData.emailChange = {
        email,
        token: hashedToken,
        expires: Date.now() + 60 * 60 * 1000,
      };

      updateData.emailChangeRequestedAt = new Date();
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      updateData,
      { new: true }
    );

    if (!updatedUser) {
      throw createHttpError(404, 'User not found');
    }

    // email відправляємо ТІЛЬКИ після успішного update
    if (emailChanged) {
      sendVerifyEmail(email, rawEmailToken).catch(console.error);
    }

    res.status(200).json({
      message: emailChanged
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
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOneAndUpdate(
      {
        'emailChange.token': hashedToken,
        'emailChange.expires': { $gt: Date.now() },
      },
      {
        $set: { email: '$emailChange.email' },
        $unset: {
          emailChange: '',
          emailChangeRequestedAt: '',
        },
      },
      { new: true }
    );

    if (!user) {
      throw createHttpError(400, 'Invalid or expired token');
    }

    return res.redirect(
      `${process.env.FRONTEND_URL}/profile?emailVerified=true`
    );
  } catch (error) {
    next(error);
  }
};

/**
 * POST /users/resend-email-verification
 */
export const resendEmailVerification = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user.emailChange?.email) {
      throw createHttpError(400, 'No email change request found');
    }

    const last = user.emailChangeRequestedAt;
    if (last && Date.now() - last.getTime() < 10 * 60 * 1000) {
      throw createHttpError(
        429,
        'You can resend verification email once per 10 minutes'
      );
    }

    const rawToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto
      .createHash('sha256')
      .update(rawToken)
      .digest('hex');

    user.emailChange.token = hashedToken;
    user.emailChange.expires = Date.now() + 60 * 60 * 1000;
    user.emailChangeRequestedAt = new Date();

    await user.save();

    sendVerifyEmail(user.emailChange.email, rawToken).catch(console.error);

    res.status(200).json({ message: 'Verification email resent' });
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
