import { calculateWeekNumber } from '../utils/calculateWeekNumber.js';
import { BabyState } from '../models/baby_states.js';
import createHttpError from 'http-errors';
import { MomState } from '../models/mom_state.model.js';
import { getUserBaseDate } from '../utils/getUserBaseDate.js';
import { mapBabyState } from '../utils/mapBabyState.js';

export const getFirstWeekInfo = async (req, res, next) => {
  try {
    const data = await BabyState.findOne({
      weekNumber: 1,
    });
    if (data !== null) {
      const babyData = mapBabyState(data);
      const firstWeekData = {
        ...babyData,
        daysToMeeting: 280,
        babySize: data.babySize,
        babyWeight: data.babyWeight,
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

export const getWeekInfo = async (req, res, next) => {
  const dueDate = getUserBaseDate(req.user);
  const { weekNumber, daysToMeeting } = calculateWeekNumber(dueDate);
  try {
    const data = await BabyState.findOne({
      weekNumber: weekNumber,
    });
    if (data !== null) {
      const babyData = mapBabyState(data);
      const weekData = {
        ...babyData,
        daysToMeeting,
        babySize: data.babySize,
        babyWeight: data.babyWeight,
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
  const dueDate = getUserBaseDate(req.user);
  const { weekNumber } = calculateWeekNumber(dueDate);
  try {
    const data = await BabyState.findOne({
      weekNumber: weekNumber,
    });
    if (data !== null) {
      const babyData = mapBabyState(data);
      const babyWeekData = {
        ...babyData,
        analogy: data.analogy,
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
  const dueDate = getUserBaseDate(req.user);
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
