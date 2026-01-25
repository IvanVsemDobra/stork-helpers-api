import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { verifyGoogleToken } from '../services/googleAuth.service.js';
import { User } from '../models/user.model.js';
import { Session } from '../models/session.js';
import {
  createSession,
  setSessionCookies,
  clearSessionCookies,
} from '../services/session.js';
import { ERRORS } from '../constants/errorMessages.js';

/**
 * Реєстрація
 */
export const registerUser = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return next(createHttpError(409, ERRORS.USER.EMAIL_EXISTS));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      name,
      password: hashedPassword,
    });

    const session = await createSession(newUser._id);
    setSessionCookies(res, session);

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

/**
 * Логін
 */
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return next(createHttpError(401, ERRORS.AUTH.INVALID_CREDENTIALS));
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return next(createHttpError(401, ERRORS.AUTH.INVALID_CREDENTIALS));
    }

    await Session.deleteMany({ userId: user._id });

    const newSession = await createSession(user._id);
    setSessionCookies(res, newSession);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

/**
 * Логін через Google
 */
export async function googleAuth(req, res, next) {
  try {
    const { credential } = req.body;

    if (!credential) {
      return next(createHttpError(400, ERRORS.AUTH.MISSING_GOOGLE_TOKEN));
    }

    const googleUser = await verifyGoogleToken(credential);

    let user = await User.findOne({ email: googleUser.email });

    if (!user) {
      user = await User.create({
        email: googleUser.email,
        name: googleUser.name,
        avatar: googleUser.avatar,
        googleId: googleUser.googleId,
        provider: 'google',
        hasCompletedOnboarding: false,
      });
    }

    await Session.deleteMany({ userId: user._id });

    const newSession = await createSession(user._id);
    setSessionCookies(res, newSession);

    return res.status(200).json(user);
  } catch (error) {
    console.error('Google auth error:', error);
    next(createHttpError(401, ERRORS.AUTH.GOOGLE_FAILED));
  }
}

/**
 * Logout
 */
export const logoutUser = async (req, res, next) => {
  try {
    const { sessionId } = req.cookies;

    if (sessionId) {
      await Session.deleteOne({ _id: sessionId });
    }

    clearSessionCookies(res);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/**
 * Refresh session
 */
export const refreshUserSession = async (req, res, next) => {
  try {
    const { sessionId, refreshToken } = req.cookies;

    const session = await Session.findOne({
      _id: sessionId,
      refreshToken,
    });

    if (!session) {
      return next(createHttpError(401, ERRORS.AUTH.NOT_AUTHENTICATED));
    }

    if (new Date() > new Date(session.refreshTokenValidUntil)) {
      return next(createHttpError(401, ERRORS.AUTH.SESSION_EXPIRED));
    }

    await Session.deleteOne({ _id: session._id });

    const newSession = await createSession(session.userId);
    setSessionCookies(res, newSession);

    res.status(200).json({ message: 'Сесія оновлена' });
  } catch (error) {
    next(error);
  }
};
