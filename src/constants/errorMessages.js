export const ERRORS = {
  AUTH: {
    INVALID_CREDENTIALS: 'Невірний email або пароль',
    NOT_AUTHENTICATED: 'Користувач не авторизований',
    SESSION_EXPIRED: 'Сесія закінчилась',
    GOOGLE_FAILED: 'Помилка автентифікації через Google',
    MISSING_GOOGLE_TOKEN: 'Відсутній Google токен',
  },

  USER: {
    NOT_FOUND: 'Користувача не знайдено',
    EMAIL_EXISTS: 'Email вже використовується',
    EMAIL_CHANGE_LIMIT: 'Email можна змінювати не частіше ніж раз на 10 хвилин',
    INVALID_THEME: 'Невірне значення теми',
    NO_DATA_TO_UPDATE: 'Немає даних для оновлення',
  },

  TASKS: {
    NOT_FOUND: 'Завдання не знайдено',
    INVALID_DATE: 'Оберіть коректну дату',
    REQUIRED_FIELDS: 'Назва та дата є обовʼязковими',
    INVALID_STATUS: 'isDone має бути boolean',
  },

  COMMON: {
    NOT_FOUND: 'Ресурс не знайдено',
    TOO_MANY_REQUESTS: 'Забагато запитів, спробуйте пізніше',
    INTERNAL: 'Сталася внутрішна помилка сервера',
  },

   UPLOAD: {
    INVALID_FILE: 'Тільки зображення дозволені',
    FILE_TOO_LARGE: 'Файл завеликий, максимум 5MB',
  },

  EMAIL: {
    INVALID_TOKEN: 'Невірний або прострочений токен',
    NO_CHANGE_REQUEST: 'Запит на зміну email відсутній',
    RESEND_LIMIT: 'Повторне надсилання можливе раз на 10 хвилин',
  },
};
