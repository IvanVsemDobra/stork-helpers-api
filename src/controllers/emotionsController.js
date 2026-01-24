import { Emotion } from '../models/emotion.model.js';
import createHttpError from 'http-errors';
import { ERRORS } from '../constants/errorMessages.js';

export const getEmotions = async (req, res, next) => {
  try {
    const emotions = await Emotion.find().sort({ title: 1 });

    if (!emotions.length) {
      return next(createHttpError(404, ERRORS.COMMON.NOT_FOUND));
    }

    res.status(200).json(emotions);
  } catch (error) {
    next(error);
  }
};
