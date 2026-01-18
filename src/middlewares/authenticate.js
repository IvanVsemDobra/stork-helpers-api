import createHttpError from 'http-errors';
import mongoose from 'mongoose';
import { Session } from '../models/session.js';
import { User } from '../models/user.model.js';

export const authenticate = async (req, res, next) => {
  try {
    const { accessToken, sessionId } = req.cookies;

    if (!accessToken || !sessionId) {
      return next(createHttpError(401, 'Not authenticated'));
    }

    if (!mongoose.Types.ObjectId.isValid(sessionId)) {
      return next(createHttpError(401, 'Invalid session'));
    }

    const session = await Session.findOne({ _id: sessionId, accessToken });

    if (!session) {
      return next(createHttpError(401, 'Invalid session'));
    }

    if (Date.now() > session.accessTokenValidUntil) {
      return next(createHttpError(401, 'Access token expired'));
    }

    const user = await User.findById(session.userId);

    if (!user) {
      return next(createHttpError(401, 'User not found'));
    }

    req.user = user;
    req.session = session;

    next();
  } catch (error) {
    next(error);
  }
};
