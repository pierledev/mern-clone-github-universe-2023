import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

// db
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';
import sessionsRouter from './routes/sessionsRoutes.js';
import speakersRouter from './routes/speakersRoutes.js';

// middlewares
import { errorHandler, notFoundHandler } from './middlewares/index.js';

const __dirname = path.resolve();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/sessions', sessionsRouter);
app.use('/api/v1/speakers', speakersRouter);

app.get('/', (req, res) =>
  res.status(200).send('<h2>MERN GitHub Universe 2023 API</h2>')
);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
});

app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
