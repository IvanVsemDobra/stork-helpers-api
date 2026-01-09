import { Emotion } from '../models/emotion.model.js';

export const getEmotions = async (req, res, next) => {
  try {
    const emotions = await Emotion.find().sort({
      title: 1,
    });
    res.status(200).json(emotions);
  } catch (error) {
    next(error);
  }
};
