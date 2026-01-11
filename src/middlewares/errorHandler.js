export const errorHandler = (err, req, res, next) => {
  // Логуємо повну помилку в консоль (корисно для дебагу)
  console.error('Error:', err);

  // Якщо помилка є HTTP-помилкою і має статус (наприклад 400, 401, 404)
  if (err.status) {
    return res.status(err.status).json({
      message: err.message, // повідомлення помилки для клієнта
    });
  }

  // Перевіряємо, чи запущений застосунок у production
  const isProd = process.env.NODE_ENV === 'production';

  // Обробка всіх інших неочікуваних помилок
  res.status(500).json({
    message: isProd
      // У production не показуємо деталі помилки з міркувань безпеки
      ? 'Щось пішло не так. Будь ласка, спробуйте пізніше.'
      // У development показуємо реальне повідомлення для зручності розробки
      : err.message,
  });
};
