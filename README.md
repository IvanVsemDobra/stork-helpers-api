# stork-helpers-api
🛠️ Tech Stack

Node.js

Express

MongoDB + Mongoose

JWT + Sessions

Swagger (API docs)

Multer (file upload)

Google OAuth

Rate Limiting

CORS

📁 Project Structure
src/
 ├─ config/          # CORS, constants, time helpers
 ├─ controllers/     # Business logic
 ├─ db/              # MongoDB connection
 ├─ docs/            # Swagger configuration
 ├─ middlewares/     # Auth, errors, rate-limit
 ├─ models/          # Mongoose schemas
 ├─ routes/          # API routes
 ├─ services/        # Email, Google auth, sessions
 ├─ utils/           # Helpers (weeks, dates, mapping)
 ├─ validations/     # Joi / custom validations
 └─ server.js        # App entry point
🔐 Authentication

Email + password

Google OAuth

Access / Refresh tokens

HTTP-only cookies

Session persistence

📚 API Documentation

Swagger доступний за адресою:

/api/docs

(після запуску сервера)

⚙️ Environment Variables

Створи файл .env на основі .env.example:

PORT=4000
MONGO_URL=your_mongo_url
JWT_SECRET=your_secret
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
🚀 Getting Started
npm install
npm run dev

Сервер буде доступний за адресою:

http://localhost:4000
🧪 Error Handling

Централізований errorHandler

404 middleware

Validation errors

Auth errors

✨ Author

Stork Helpers Team 🕊️
