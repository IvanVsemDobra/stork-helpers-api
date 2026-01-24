import { calculateWeekNumber } from '../utils/calculateWeekNumber.js';
import { BabyState } from '../models/baby_states.js';
import createHttpError from 'http-errors';
import { MomState } from '../models/mom_state.model.js';
import { getUserBaseDate } from '../utils/getUserBaseDate.js';
import { mapBabyState } from '../utils/mapBabyState.js';
import { ERRORS } from '../constants/errorMessages.js';

export const getFirstWeekInfo = async (req, res, next) => {
  try {
    const data = await BabyState.findOne({ weekNumber: 1 });
    if (!data) return next(createHttpError(404, ERRORS.COMMON.NOT_FOUND));

    const babyData = mapBabyState(data);
    res.status(200).json({
      ...babyData,
      daysToMeeting: 280,
      babySize: data.babySize,
      babyWeight: data.babyWeight,
      momDailyTips: data.momDailyTips,
    });
  } catch (error) {
    next(error);
  }
};

export const getWeekInfo = async (req, res, next) => {
  try {
    const dueDate = getUserBaseDate(req.user);
    const { weekNumber, daysToMeeting } = calculateWeekNumber(dueDate);

    const data = await BabyState.findOne({ weekNumber });
    if (!data) return next(createHttpError(404, ERRORS.COMMON.NOT_FOUND));

    const babyData = mapBabyState(data);
    res.status(200).json({
      ...babyData,
      daysToMeeting,
      babySize: data.babySize,
      babyWeight: data.babyWeight,
      momDailyTips: data.momDailyTips,
    });
  } catch (error) {
    next(error);
  }
};

export const getWeekBabyInfo = async (req, res, next) => {
  try {
    let { weekNumber } = req.params;
    if (!weekNumber) {
      const dueDate = getUserBaseDate(req.user);
      ({ weekNumber } = calculateWeekNumber(dueDate));
    }

    const data = await BabyState.findOne({ weekNumber });
    if (!data) return next(createHttpError(404, ERRORS.COMMON.NOT_FOUND));

    const babyData = mapBabyState(data);
    res.status(200).json({
      ...babyData,
      analogy: data.analogy,
      interestingFact: data.interestingFact,
    });
  } catch (error) {
    next(error);
  }
};

export const getWeekMomInfo = async (req, res, next) => {
  try {
    let { weekNumber } = req.params;
    if (!weekNumber) {
      const dueDate = getUserBaseDate(req.user);
      ({ weekNumber } = calculateWeekNumber(dueDate));
    }

    const data = await MomState.findOne({ weekNumber });
    if (!data) return next(createHttpError(404, ERRORS.COMMON.NOT_FOUND));

    res.status(200).json({
      weekNumber: data.weekNumber,
      feelings: data.feelings,
      comfortTips: data.comfortTips,
    });
  } catch (error) {
    next(error);
  }
};
