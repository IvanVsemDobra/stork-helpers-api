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

    // 🔐 production-grade email change flow
    emailChange: {
      email: { type: String, trim: true },
      token: { type: String },
      expires: { type: Date },
    },

    // 🕒 антиспам-захист
    emailChangeRequestedAt: { type: Date },
  },
  { timestamps: true }
);

userSchema.pre('save', function () {
  if (!this.name) {
    this.name = this.email;
  }
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();

  delete obj.password;
  delete obj.emailChange;

  // на випадок старих документів
  delete obj.pendingEmail;
  delete obj.emailVerifyToken;
  delete obj.emailVerifyExpires;

  return obj;
};

export const User = mongoose.model('User', userSchema);
