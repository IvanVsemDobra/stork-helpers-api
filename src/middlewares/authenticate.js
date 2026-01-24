import createHttpError from 'http-errors';
import mongoose from 'mongoose';
import { Session } from '../models/session.js';
import { User } from '../models/user.model.js';
import { ERRORS } from '../constants/errorMessages.js';

export const authenticate = async (req, res, next) => {
  try {
    const { accessToken, sessionId } = req.cookies;

    if (!accessToken || !sessionId) {
      return next(createHttpError(401, ERRORS.AUTH.NOT_AUTHENTICATED));
    }

    if (!mongoose.Types.ObjectId.isValid(sessionId)) {
      return next(createHttpError(401, ERRORS.AUTH.INVALID_CREDENTIALS));
    }

    const session = await Session.findOne({ _id: sessionId, accessToken });

    if (!session) {
      return next(createHttpError(401, ERRORS.AUTH.INVALID_CREDENTIALS));
    }

    if (Date.now() > session.accessTokenValidUntil) {
      return next(createHttpError(401, ERRORS.AUTH.SESSION_EXPIRED));
    }

    const user = await User.findById(session.userId);

    if (!user) {
      return next(createHttpError(401, ERRORS.USER.NOT_FOUND));
    }

    req.user = user;
    req.session = session;

    next();
  } catch (error) {
    console.error('Authenticate middleware error:', error);
    next(createHttpError(500, ERRORS.COMMON.INTERNAL));
  }
};
