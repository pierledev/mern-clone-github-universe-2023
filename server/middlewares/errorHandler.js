import { StatusCodes } from 'http-status-codes';

// I tried to remove 'next' parameter because in the code block, I will not use it, but turned out my app couldn't retrieve the error message
const errorHandler = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, please try again later.',
  };

  res.status(defaultError.statusCode).json({ message: defaultError.msg });
};

export default errorHandler;
