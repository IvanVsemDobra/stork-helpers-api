import swaggerJSDoc from 'swagger-jsdoc';

// Динамічний URL сервера
const SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://stork-helpers-api.onrender.com' // живий сервер Render
    : 'http://localhost:3030';                // локальна розробка

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Stork-Helpers API',
      version: '1.0.0',
      description: 'Backend API documentation',
    },
    servers: [
      {
        url: SERVER_URL,
      },
    ],

    // 🔒 Глобальна авторизація через cookies
    security: [
      {
        cookieAuth: [],
      },
    ],

    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'accessToken',
        },
      },
    },
  },

  apis: [
    './src/routes/*.js',
    './src/models/*.js',
  ],
};

export const swaggerSpec = swaggerJSDoc(options);
