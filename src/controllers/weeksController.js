import { calculateWeekNumber } from '../utils/calculateWeekNumber.js';
import { BabyState } from './models/baby_states.js';
import createHttpError from 'http-errors';

export const getFirstWeekInfo = async (req, res, next) => {
  try {
    const data = await BabyState.findOne({
      weekNumber: 1,
      isPublished: true,
    });
    if (data !== null) {
      const states = {
        weekNumber: data.weekNumber,
        babySize: data.babySize,
        babyWeight: data.babyWeight,
        image: data.image,
        imageAlt: data.imageAlt,
        babyActivity: data.babyActivity,
        babyDevelopment: data.babyDevelopment,
        momDailyTips: data.momDailyTips,
      };
      return res.status(200).json(states);
    } else {
      next(createHttpError(404, 'Week data not found'));
    }
  } catch (error) {
    next(error);
  }
};

const dueDate = new Date('2026-07-20'); //!змінити на дату з профілю

export const getWeekInfo = async (req, res, next) => {
  const weekNumber = calculateWeekNumber(dueDate);
  try {
    const data = await BabyState.findOne({
      weekNumber: weekNumber,
      isPublished: true,
    });
    if (data !== null) {
      const states = {
        weekNumber: data.weekNumber,
        babySize: data.babySize,
        babyWeight: data.babyWeight,
        image: data.image,
        imageAlt: data.imageAlt,
        babyActivity: data.babyActivity,
        babyDevelopment: data.babyDevelopment,
        momDailyTips: data.momDailyTips,
      };
      return res.status(200).json(states);
    } else {
      next(createHttpError(404, 'Week data not found'));
    }
  } catch (error) {
    next(error);
  }
};
