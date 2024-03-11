import Session from '../models/Session.js';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';

export const createSession = async (req, res) => {
  const { title, labels, description, speakers, tracks, type, schedule } =
    req.body;

  if (
    !title ||
    !labels ||
    !description ||
    !speakers ||
    !tracks ||
    !type ||
    !schedule
  ) {
    throw new BadRequestError('Please provide all required values');
  }

  const newSession = await Session.create(req.body);

  res
    .status(StatusCodes.CREATED)
    .json({ session: newSession, message: 'Session created' });
};

export const getAllSessions = async (req, res) => {
  const sessions = await Session.find({});

  res.status(StatusCodes.OK).json({ sessions });
};

export const likeSession = async (req, res) => {
  const { id: sessionId } = req.params;
  const { userId } = req.user;

  const session = await Session.findById(sessionId);
  if (!session) {
    throw new NotFoundError('Session not found');
  }

  session.likedBy.set(userId, true);

  const updatedSession = await Session.findByIdAndUpdate(
    sessionId,
    { likedBy: session.likedBy },
    { new: true, runValidators: true }
  );

  res.status(StatusCodes.OK).json({
    updatedSession,
    message: 'Session is added to liked',
  });
};

export const unlikeSession = async (req, res) => {
  const { id: sessionId } = req.params;
  const { userId } = req.user;

  const session = await Session.findById(sessionId);
  if (!session) {
    throw new NotFoundError('Session not found');
  }

  session.likedBy.delete(userId);

  const updatedSession = await Session.findByIdAndUpdate(
    sessionId,
    { likedBy: session.likedBy },
    { new: true, runValidators: true }
  );

  res.status(StatusCodes.OK).json({
    updatedSession,
    message: 'Session removed from liked',
  });
};

export const scheduleSession = async (req, res) => {
  const { id: sessionId } = req.params;
  const { userId } = req.user;

  const session = await Session.findById(sessionId);
  if (!session) {
    throw new NotFoundError('Session not found');
  }

  session.scheduledBy.set(userId, true);

  const updatedSession = await Session.findByIdAndUpdate(
    sessionId,
    { scheduledBy: session.scheduledBy },
    { new: true, runValidators: true }
  );

  res
    .status(StatusCodes.OK)
    .json({ updatedSession, message: 'Session added to scheduled' });
};

export const unscheduleSession = async (req, res) => {
  const { id: sessionId } = req.params;
  const { userId } = req.user;

  const session = await Session.findById(sessionId);
  if (!session) {
    throw new NotFoundError('Session not found');
  }

  session.scheduledBy.delete(userId);

  const updatedSession = await Session.findByIdAndUpdate(
    sessionId,
    { scheduledBy: session.scheduledBy },
    { new: true, runValidators: true }
  );

  res.status(StatusCodes.OK).json({
    updatedSession,
    message: 'Session removed from schedule',
  });
};
