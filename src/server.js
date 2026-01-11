import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger.js';

import { connectMongoDB } from './db/connectMongoDB.js';

import authRoutes from './routes/authRoutes.js';
import weeksRoutes from './routes/weeksRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import tasksRouter from './routes/tasksRoutes.js';
import diariesRoutes from './routes/diariesRoutes.js';
import cookieParser from 'cookie-parser';

import emotionsRoutes from './routes/emotionsRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const app = express();
const PORT = process.env.PORT ?? 3030;

/* ========= Middleware ========= */
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })
);
app.use(cookieParser());
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


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* ========= Routes ========= */

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Stork-Helpers API',
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/tasks', tasksRouter);
app.use('/api/diaries', diariesRoutes);
app.use('/api/weeks', weeksRoutes);
app.use('/api/emotions', emotionsRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

/* ========= Start ========= */
const startServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`🚀 API running on http://localhost:${PORT}`);
  });
};

startServer();
