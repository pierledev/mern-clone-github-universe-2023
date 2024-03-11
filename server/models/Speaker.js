import mongoose from 'mongoose';

const SpeakerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: [2, 'Name min 2 characters'],
      maxlength: [30, 'Name max 30 characters'],
      required: [true, 'Name is required'],
      unique: true,
    },
    photo: {
      type: String,
      required: [true, 'Photo is required'],
    },
    role: {
      type: String,
      trim: true,
      minlength: [2, 'Role min 2 characters'],
      maxlength: [40, 'Role max 40 characters'],
      required: [true, 'Role is required'],
    },
    company: {
      type: String,
      trim: true,
      minlength: [2, 'Company min 2 characters'],
      maxlength: [20, 'Company max 20 characters'],
      required: [true, 'Company is required'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1500, 'Description max 1500 characters'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Speaker', SpeakerSchema);
