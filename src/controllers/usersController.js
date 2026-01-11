import createHttpError from 'http-errors';
import { User } from '../models/user.model.js';

export const getCurrentUser = async (req, res) => {
  res.status(200).json(req.user);
};

export const updateUser = async (req, res, next) => {
  try {
    const { name, dueDate, theme } = req.body;

    if (!name && !dueDate && !theme) {
      throw createHttpError(400, 'No data to update');
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        ...(name && { name }),
        ...(dueDate && { dueDate }),
        ...(theme && { theme }),
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
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
