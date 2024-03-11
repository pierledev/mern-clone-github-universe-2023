import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      minlength: [2, 'First name min 2 characters'],
      maxlength: [20, 'First name max 20 characters'],
      required: [true, 'First name is required'],
    },
    lastName: {
      type: String,
      trim: true,
      minlength: [2, 'Last name min 2 characters'],
      maxlength: [20, 'Last name max 20 characters'],
      required: [true, 'Last name is required'],
    },
    email: {
      type: String,
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: 'A valid email is required',
      },
      required: [true, 'Email is required'],
      unique: true,
    },
    githubHandle: {
      type: String,
      trim: true,
      minlength: [6, 'GitHub handle min 6 characters'],
      maxlength: [12, 'GitHub handle max 12 characters'],
      required: [true, 'GitHub handle is required'],
      unique: true,
    },
    password: {
      type: String,
      validate: {
        validator: (value) => {
          return validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          });
        },
        message: () =>
          `Password must have at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character.`,
      },
      required: ['Password is required'],
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model('User', UserSchema);
