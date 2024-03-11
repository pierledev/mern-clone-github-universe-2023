import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js';

const authHandler = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    throw new UnAuthenticatedError('Authentication invalid');
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const demoUser = payload.userId === '6539f5f033829ae2e788be4e';
    const adminUser = payload.userId === '654f715713b686d04adae576';

    req.user = { userId: payload.userId, demoUser, adminUser };
    next();
  } catch (error) {
    throw new UnAuthenticatedError('Authentication invalid');
  }
};

export default authHandler;
