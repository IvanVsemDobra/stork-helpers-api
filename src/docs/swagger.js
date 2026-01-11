import swaggerJSDoc from 'swagger-jsdoc';

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
        url: 'http://localhost:3030',
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
