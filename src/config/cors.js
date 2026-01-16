const allowedOrigins = [
  'http://localhost:3000',
  'https://domonique-slimsy-madalene.ngrok-free.dev',
  process.env.FRONTEND_URL,
].filter(Boolean);

export const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      // Postman, server-to-server
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked origin: ${origin}`));
  },
  credentials: true,
};
