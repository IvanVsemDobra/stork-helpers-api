import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    avatar: { type: String },
    dueDate: { type: Date },
    theme: {
      type: String,
      enum: ['girl', 'boy', 'neutral'],
      default: 'neutral',
    },
  },
  { timestamps: true },
);

export default mongoose.model('User', userSchema);
