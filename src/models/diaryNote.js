import { Schema, model } from 'mongoose';

const diaryNoteSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    emotions: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Emotion',
        },
      ],
      required: true,
    },
    description: { type: String, trim: true, required: true },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default model('DiaryNote', diaryNoteSchema);
