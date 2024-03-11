import { ForbiddenError } from '../errors/index.js';

const adminHandler = (req, res, next) => {
  if (!req.user.adminUser) {
    throw new ForbiddenError(
      'Access denied. Only admin can access this resource'
    );
  }

  next();
};

export default adminHandler;
