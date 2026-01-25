import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
});

export async function verifyGoogleToken(idToken) {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  if (!payload || !payload.email) {
    throw new Error('Invalid Google token payload');
  }

  if (!payload.email_verified) {
    throw new Error('Google email is not verified');
  }

  return {
    googleId: payload.sub,
    email: payload.email,
    name: payload.name || payload.email.split('@')[0],
    avatar: payload.picture,
  };
}
