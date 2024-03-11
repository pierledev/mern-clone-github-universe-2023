import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';
import { attachCookie } from '../utils/index.js';

export const register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    githubHandle,
    password,
    confirmPassword,
  } = req.body;

  if (firstName.trim().length < 2 || lastName.trim().length < 2) {
    throw new BadRequestError('First name and last name min 2 characters');
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }

  if (githubHandle.trim().length < 6) {
    throw new BadRequestError('GitHub handle min 6 characters');
  }

  const githubHandleAlreadyExists = await User.findOne({ githubHandle });
  if (githubHandleAlreadyExists) {
    throw new BadRequestError('GitHub handle already in use');
  }

  const passwordsMatch = password === confirmPassword;
  if (!passwordsMatch) {
    throw new BadRequestError('Passwords do not match');
  }

  // Passwords must include the following:
  // a lowercase letter (a-z)
  // an uppercase letter (A-Z)
  // a number (0-9)
  // a special character (!@#$%)
  // at least 8 characters
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%])[A-Za-z\d!@#\$%]{8,}$/;

  if (!passwordRegex.test(password)) {
    throw new BadRequestError(
      'Password must have at least 8 characters, including at least a lowercase letter, an uppercase letter, a number, & a special character'
    );
  }

  const newUser = await User.create(req.body);
  newUser.password = undefined;

  res
    .status(StatusCodes.CREATED)
    .json({ user: newUser, message: 'Account successfully created' });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Email and password are required');
  }
  const userExists = await User.findOne({ email }).select('+password');
  if (!userExists) {
    throw new UnAuthenticatedError('Invalid credentials');
  }

  const passwordCorrect = await userExists.comparePassword(password);
  if (!passwordCorrect) {
    throw new UnAuthenticatedError('Invalid credentials');
  }

  const token = userExists.createJWT();
  attachCookie({ res, token });
  userExists.password = undefined;

  res
    .status(StatusCodes.OK)
    .json({ user: userExists, message: 'Successfully logged in' });
};

export const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ message: 'Succesfully logged out' });
};
