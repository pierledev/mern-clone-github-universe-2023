import mongoose from 'mongoose';

const SpeakerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: [3, "Speaker' name min 3 characters"],
    maxlength: [30, "Speaker's name max 50 characters"],
    required: [true, "Speaker's name is required"],
  },
  role: {
    type: String,
    trim: true,
    minlength: [2, 'Role min 2 characters'],
    required: [true, "Speaker's role is required"],
  },
  company: {
    type: String,
    trim: true,
    minlength: [2, 'Company min 2 characters'],
    required: [true, "Speaker's company is required"],
  },
});

const SessionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: [5, 'Title min 5 characters'],
      maxlength: [140, 'Title max 140 characters'],
      required: [true, 'Title is required'],
      unique: true,
    },
    labels: {
      type: [String],
      enum: ['In-person', 'Livestream', 'Recorded'],
      required: [true, 'Label is required'],
    },
    description: {
      type: String,
      trim: true,
      minlength: [10, 'Descriptn min 10 characters'],
      maxlength: [1000, 'Description max 1000 characters'],
      required: [true, 'Description is required'],
    },
    speakers: {
      type: [SpeakerSchema],
      required: [true, 'Speakers are required'],
    },
    tracks: {
      type: [String],
      enum: ['AI', 'Developer Experience', 'Security'],
      required: [true, 'Track session is required'],
    },
    type: {
      type: String,
      enum: [
        'Keynote',
        'General Session',
        'Studio Session',
        'Fireside Chat',
        'Panel Discussion',
        'Main Stage',
        'Specal Event',
      ],
      required: [true, 'Type session is required'],
    },
    level: {
      type: String,
      enum: [
        'Level 100: Introductory',
        'Level 200: Intermediate',
        'Level 300: Advanced',
      ],
    },
    schedule: {
      day: {
        type: String,
        enum: ['2023-11-07', '2023-11-08', '2023-11-09'],
        required: [true, 'Day is required'],
      },
      time: {
        type: String,
        required: true,
      },
    },
    likedBy: {
      type: Map,
      of: Boolean,
      default: {},
    },
    scheduledBy: {
      type: Map,
      of: Boolean,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Session', SessionSchema);
