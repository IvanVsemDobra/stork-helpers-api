import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pino from 'pino-http';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import cookieParser from 'cookie-parser';

import { swaggerSpec } from './docs/swagger.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import { corsOptions } from './config/cors.js';

import authRoutes from './routes/authRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import tasksRouter from './routes/tasksRoutes.js';
import diariesRoutes from './routes/diariesRoutes.js';
import weeksRoutes from './routes/weeksRoutes.js';
import emotionsRoutes from './routes/emotionsRoutes.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const app = express();
const PORT = process.env.PORT ?? 3030;

/* =====================================================
   ВАЖЛИВО: довіряємо проксі (Render / Vercel / Next.js)
   Без цього secure cookies НЕ працюють
===================================================== */
app.set('trust proxy', 1);

/* ========= Middleware ========= */

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors(corsOptions));

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
  })
);

/* ========= Swagger ========= */

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* ========= Health ========= */

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Stork-Helpers API',
  });
});

/* ========= Routes ========= */

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/tasks', tasksRouter);
app.use('/api/diaries', diariesRoutes);
app.use('/api/weeks', weeksRoutes);
app.use('/api/emotions', emotionsRoutes);

/* ========= Errors ========= */

app.use(notFoundHandler);
app.use(errorHandler);

/* ========= Start ========= */

const startServer = async () => {
  try {
    await connectMongoDB();

    app.listen(PORT, () => {
      console.log(`API running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Server start error:', error);
    process.exit(1);
  }
};

startServer();

export default app;
