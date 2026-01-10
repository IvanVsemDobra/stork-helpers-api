import { createSession, setSessionCookies } from './session.js';

/**
 * Логін користувача
 */
export const loginUser = async (res, userId) => {
  const session = await createSession(userId);
  setSessionCookies(res, session);
  return session;
};
