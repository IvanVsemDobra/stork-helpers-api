import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';

import { connectMongoDB } from './db/connectMongoDB.js';

import weeksRoutes from './routes/weeksRoutes.js';
import emotionsRouts from './routes/emotionsRouts.js';
const app = express();
const PORT = process.env.PORT ?? 3030;

/* ========= Middleware ========= */
app.use(express.json());
app.use(cors());
app.use(
  pino({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
  }),
);

/* ========= Маршрути ========= */

// Головний маршрут
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API Stork-Helpers працює',
  });
});

/* ===== BABY AND MOM STATES ===== */

app.use(weeksRoutes);

//  Емоції
app.use(emotionsRouts);

/* ========= 404 ========= */
app.use((req, res) => {
  res.status(404).json({
    message: 'Маршрут не знайдено',
  });
});

/* ========= Error handler ========= */
app.use((err, req, res, next) => {
  console.error(err);

  const isProd = process.env.NODE_ENV === 'production';

  res.status(500).json({
    message: isProd
      ? 'Сталася помилка сервера. Спробуйте пізніше.'
      : err.message,
  });
});

/* ========= Запуск ========= */
const startServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(` Сервер Stork-Helpers запущено на порту ${PORT}`);
  });
};

startServer();
