import express from 'express';
import { authHandler, adminHandler } from '../middlewares/index.js';
import {
  createSession,
  getAllSessions,
  likeSession,
  unlikeSession,
  scheduleSession,
  unscheduleSession,
} from '../controllers/sessionsController.js';

const router = express.Router();

router
  .route('/')
  .post(authHandler, adminHandler, createSession)
  .get(getAllSessions);

router.route('/:id/like').patch(authHandler, likeSession);
router.route('/:id/unlike').patch(authHandler, unlikeSession);
router.route('/:id/schedule').patch(authHandler, scheduleSession);
router.route('/:id/unschedule').patch(authHandler, unscheduleSession);

export default router;