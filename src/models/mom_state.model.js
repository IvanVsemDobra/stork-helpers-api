import { Schema, model } from 'mongoose';

const MomStateSchema = new Schema(
  {
    weekNumber: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
      max: 42,
    },

    feelings: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Emotion',
      },
    ],

    comfortTips: {
      type: [String],
      default: [],
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const MomState = model('MomState', MomStateSchema);
