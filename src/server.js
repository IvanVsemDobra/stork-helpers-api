import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';

import { connectMongoDB } from './db/connectMongoDB.js';

import authRoutes from './routes/authRoutes.js';
import weeksRoutes from './routes/weeksRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import tasksRouter from './routes/tasksRoutes.js';

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

/* ========= Routes ========= */

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Stork-Helpers API',
  });
});

app.use( '/api', authRoutes );
app.use('/api', weeksRoutes);
app.use('/api', usersRoutes);

app.use('/api/tasks', tasksRouter);

/* ========= 404 ========= */
app.use((req, res) => {
  res.status(404).json({
    message: 'Маршрут не знайдено',
  });
});

/* ========= Error handler ========= */
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message:
      process.env.NODE_ENV === 'production'
        ? 'Сталася помилка сервера'
        : err.message,
  });
});

/* ========= Start ========= */
const startServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`🚀 API running on http://localhost:${PORT}`);
  });
};

startServer();
