import express from 'express';
import { authHandler, adminHandler } from '../middlewares/index.js';
import {
  createSpeaker,
  getAllSpeakers,
} from '../controllers/speakersController.js';

const router = express.Router();

router
  .route('/')
  .post(authHandler, adminHandler, createSpeaker)
  .get(getAllSpeakers);

export default router;
