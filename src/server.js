import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';

import { connectMongoDB } from './db/connectMongoDB.js';

import { MomState } from './models/mom_state.model.js';
import { Emotion } from './models/emotion.model.js';
import weeksRoutes from './routes/weeksRoutes.js';

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

/* ===== BABY STATES ===== */

// Усі стани дитини
app.use(weeksRoutes);

/* ===== MOM STATES ===== */

// Емоційний стан мами по тижню
app.get('/mom-states/:weekNumber', async (req, res, next) => {
  try {
    const weekNumber = Number(req.params.weekNumber);

    if (Number.isNaN(weekNumber)) {
      return res.status(400).json({
        message: 'Номер тижня має бути числом',
      });
    }

    const momState = await MomState.findOne({
      weekNumber,
      isPublished: true,
    }).populate('feelings', 'title');

    if (!momState) {
      return res.status(404).json({
        message: 'Дані про емоційний стан для цього тижня не знайдено',
      });
    }

    res.status(200).json(momState);
  } catch (error) {
    next(error);
  }
});

/* ===== EMOTIONS ===== */

// Отримати всі активні емоції
app.get('/emotions', async (req, res, next) => {
  try {
    const emotions = await Emotion.find({ isActive: true }).sort({
      title: 1,
    });

    res.status(200).json(emotions);
  } catch (error) {
    next(error);
  }
});

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
