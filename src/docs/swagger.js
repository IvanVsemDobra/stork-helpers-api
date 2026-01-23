import swaggerJSDoc from 'swagger-jsdoc';

// Динамічний URL сервера
const SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://stork-helpers-api.onrender.com'
    : 'http://localhost:3030';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Stork-Helpers API',
      version: '1.0.0',
      description: 'Backend API documentation',
    },
    servers: [
      { url: SERVER_URL },
    ],

    // 🔒 Глобальна авторизація через cookies
    security: [
      { cookieAuth: [] },
    ],

    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'accessToken',
        },
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
  },
  apis: [
    './src/routes/*.js',  // всі роутери з Swagger-коментарями
    './src/models/*.js',  // моделі, якщо додаєш схеми
    './src/docs/*.js',    // додаткові docs файли
  ],
};

export const swaggerSpec = swaggerJSDoc(options);
