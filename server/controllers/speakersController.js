import Speaker from '../models/Speaker.js';
import { BadRequestError } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';

export const createSpeaker = async (req, res) => {
  const { name } = req.body;

  const speakerAlreadyExists = await Speaker.findOne({ name });
  if (speakerAlreadyExists) {
    throw new BadRequestError('Speaker already exists');
  }

  const speaker = await Speaker.create(req.body);

  res.status(StatusCodes.CREATED).json({ speaker, message: 'Speaker created' });
};

export const getAllSpeakers = async (req, res) => {
  const speakers = await Speaker.find({});

  res.status(StatusCodes.OK).json({ speakers });
};
