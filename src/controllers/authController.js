import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { verifyGoogleToken } from '../services/googleAuth.service.js';

import { User } from '../models/user.model.js';
import { Session } from '../models/session.js';
import {
  createSession,
  setSessionCookies,
  clearSessionCookies,
} from '../services/session.js';

/**
 * Реєстрація
 */
export const registerUser = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return next(createHttpError(409, 'Email already exists'));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      name,
      password: hashedPassword,
    });

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
      return next(createHttpError(401, 'Invalid credentials'));
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return next(createHttpError(401, 'Invalid credentials'));
    }

    // видаляємо старі сесії користувача
    await Session.deleteMany({ userId: user._id });

    const newSession = await createSession(user._id);
    setSessionCookies(res, newSession);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

/**
 * Логін з Google
 */
export async function googleAuth(req, res) {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({ message: 'Missing credential' });
    }

    // 1. Verify Google ID token
    const googleUser = await verifyGoogleToken(credential);

    // 2. Find or create user
    let user = await User.findOne({ email: googleUser.email });

    if (!user) {
      user = await User.create({
        email: googleUser.email,
        name: googleUser.name,
        avatar: googleUser.avatar,
        googleId: googleUser.googleId,
        hasCompletedOnboarding: false,
        provider: 'google',
      });
    }

    // 3. Create JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    // 4. Set cookie
    res.cookie('session', token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true, // true у prod
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // 5. Return user
    return res.json({ user });
  } catch (err) {
    console.error('Google auth error:', err);
    return res.status(401).json({ message: 'Google authentication failed' });
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
    const session = await Session.findOne({
      _id: req.cookies.sessionId,
      refreshToken: req.cookies.refreshToken,
    });

    if (!session) {
      return next(createHttpError(401, 'Session not found'));
    }

    const isExpired = new Date() > new Date(session.refreshTokenValidUntil);

    if (isExpired) {
      return next(createHttpError(401, 'Session token expired'));
    }

    await Session.deleteOne({ _id: session._id });

    const newSession = await createSession(session.userId);
    setSessionCookies(res, newSession);

    res.status(200).json({ message: 'Session refreshed' });
  } catch (error) {
    next(error);
  }
};
