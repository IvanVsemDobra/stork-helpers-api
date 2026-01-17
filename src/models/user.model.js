import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    name: { type: String, trim: true },
    avatar: { type: String },
    dueDate: { type: Date },

    theme: {
      type: String,
      enum: ['girl', 'boy', 'neutral'],
      default: 'neutral',
    },

    // 🔽 ДЛЯ EMAIL ВЕРИФІКАЦІЇ
    pendingEmail: { type: String },
    emailVerifyToken: { type: String },
    emailVerifyExpires: { type: Date },
  },
  { timestamps: true },
);

userSchema.pre('save', function () {
  if (!this.name) {
    this.name = this.email;
  }
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.emailVerifyToken;
  delete obj.emailVerifyExpires;
  return obj;
};

export const User = mongoose.model('User', userSchema);
