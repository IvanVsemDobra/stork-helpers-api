import { calculateWeekNumber } from '../utils/calculateWeekNumber.js';
import { BabyState } from '../models/baby_states.js';
import createHttpError from 'http-errors';
import { MomState } from '../models/mom_state.model.js';

export const getFirstWeekInfo = async (req, res, next) => {
  try {
    console.log('DB:', BabyState.db.name);
    console.log('COLLECTION:', BabyState.collection.name);

    const data = await BabyState.findOne({
      weekNumber: 1,
    });
    if (data !== null) {
      const firstWeekData = {
        weekNumber: data.weekNumber,
        daysToMeeting: 280,
        babySize: data.babySize,
        babyWeight: data.babyWeight,
        image: data.image,
        imageAlt: data.imageAlt,
        babyActivity: data.babyActivity,
        babyDevelopment: data.babyDevelopment,
        momDailyTips: data.momDailyTips,
      };
      return res.status(200).json(firstWeekData);
    } else {
      next(createHttpError(404, 'Week data not found'));
    }
  } catch (error) {
    next(error);
  }
};

//!dueDate отримуємо або з даних профілю юзера, або, якщо не зазначено = даті реєстрації
const dueDate = new Date('2026-07-21'); //!це тимчасово, потім прибрати new Date('2026-07-20')

export const getWeekInfo = async (req, res, next) => {
  const { weekNumber, daysToMeeting } = calculateWeekNumber(dueDate);
  try {
    const data = await BabyState.findOne({
      weekNumber: weekNumber,
    });
    if (data !== null) {
      const weekData = {
        weekNumber: data.weekNumber,
        daysToMeeting,
        babySize: data.babySize,
        babyWeight: data.babyWeight,
        image: data.image,
        imageAlt: data.imageAlt,
        babyActivity: data.babyActivity,
        babyDevelopment: data.babyDevelopment,
        momDailyTips: data.momDailyTips,
      };
      return res.status(200).json(weekData);
    } else {
      next(createHttpError(404, 'Week data not found'));
    }
  } catch (error) {
    next(error);
  }
};

export const getWeekBabyInfo = async (req, res, next) => {
  const { weekNumber } = calculateWeekNumber(dueDate);
  try {
    const data = await BabyState.findOne({
      weekNumber: weekNumber,
    });
    if (data !== null) {
      const babyWeekData = {
        weekNumber: data.weekNumber,
        analogy: data.analogy,
        image: data.image,
        imageAlt: data.imageAlt,
        babyActivity: data.babyActivity,
        babyDevelopment: data.babyDevelopment,
        interestingFact: data.interestingFact,
      };
      return res.status(200).json(babyWeekData);
    } else {
      next(createHttpError(404, 'Baby data not found'));
    }
  } catch (error) {
    next(error);
  }
};

export const getWeekMomInfo = async (req, res, next) => {
  const { weekNumber } = calculateWeekNumber(dueDate);
  console.log('WEEK NUMBER:', weekNumber);
  console.log('DB:', MomState.db.name);
  console.log('COLLECTION:', MomState.collection.name);
  try {
    const data = await MomState.findOne({
      weekNumber: weekNumber,
    });
    if (data !== null) {
      const momWeekData = {
        weekNumber: data.weekNumber,
        feelings: data.feelings,
        comfortTips: data.comfortTips,
      };
      return res.status(200).json(momWeekData);
    } else {
      next(createHttpError(404, 'Mother data not found'));
    }
  } catch (error) {
    next(error);
  }
};
