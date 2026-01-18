import crypto from 'crypto';
import { FIFTEEN_MINUTES, ONE_DAY } from '../constants/time.js';
import { Session } from '../models/session.js';

/**
 * 1. Створення сесії в базі даних
 */
export const createSession = async (userId) => {
  const accessToken = crypto.randomBytes(30).toString('base64');
  const refreshToken = crypto.randomBytes(30).toString('base64');

  return Session.create({
    userId,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });
};

/**
 * 2. Встановлення кук у браузері
 */
export const setSessionCookies = (res, session) => {
  const isProd = process.env.NODE_ENV === 'production';

  const cookieOptions = {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
    path: '/', // КРИТИЧНО: дозволяє кукам працювати на всіх сторінках
  };

  res.cookie('accessToken', session.accessToken, {
    ...cookieOptions,
    maxAge: FIFTEEN_MINUTES,
  });

  res.cookie('refreshToken', session.refreshToken, {
    ...cookieOptions,
    maxAge: ONE_DAY,
  });

  res.cookie('sessionId', session._id.toString(), {
    ...cookieOptions,
    maxAge: ONE_DAY,
  });
};

/**
 * 3. Очищення кук (Logout)
 * ВАЖЛИВО: Опції МАЮТЬ БУТИ ТАКИМИ САМИМИ, як при встановленні
 */
export const clearSessionCookies = (res) => {
  const isProd = process.env.NODE_ENV === 'production';

  const options = {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
    path: '/', // ТЕПЕР БРАУЗЕР ТОЧНО ВИДАЛИТЬ КУКУ
  };

  res.clearCookie('accessToken', options);
  res.clearCookie('refreshToken', options);
  res.clearCookie('sessionId', options);
};

/**
 * 4. Хелпер для швидкого логіну
 */
export const loginUser = async (res, userId) => {
  const session = await createSession(userId);
  setSessionCookies(res, session);
  return session;
};