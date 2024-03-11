import { StatusCodes } from 'http-status-codes';

const notFoundHandler = (req, res) =>
  res
    .status(StatusCodes.NOT_FOUND)
    .send(
      'There is a problem in our server. Please try again later. [API route does not exist].'
    );

export default notFoundHandler;
