const allowedOrigins = [
  'http://localhost:3000', // фронт локально
  'http://localhost:3030', // Swagger локально
  'https://stork-helpers-next-ten.vercel.app', // фронт продакшн
  'https://stork-helpers-api.onrender.com', // бекенд на Render same-origin для Swagger
  process.env.FRONTEND_URL?.replace(/\/$/, ''), // на всякий випадок
].filter(Boolean);

export const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      // Postman або сервер-сервер запит
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked origin: ${origin}`));
  },
  credentials: true,
};
