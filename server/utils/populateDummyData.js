import { readFile } from 'fs/promises';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from '../db/connect.js';

import Session from '../models/Session.js';
import Speaker from '../models/Speaker.js';

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    const jsonSessions = JSON.parse(
      await readFile(new URL('../dummyData/sessions.json', import.meta.url))
    );
    const jsonSpeakers = JSON.parse(
      await readFile(new URL('../dummyData/speakers.json', import.meta.url))
    );

    // Clear existing data
    await Session.deleteMany();
    await Speaker.deleteMany();

    // Create new entries from JSON files
    await Session.create(jsonSessions);
    await Speaker.create(jsonSpeakers);

    console.log('Success!! Data populated.');
    process.exit(0);
  } catch (error) {
    console.error('Error populating data: ', error);
    process.exit(1);
  }
};

start();
