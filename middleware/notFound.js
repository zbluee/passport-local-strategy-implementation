import { StatusCodes } from 'http-status-codes';
const notFound = (req, res)=> res.status(StatusCodes.NOT_FOUND).send('page not found');

export {notFound as notFoundMiddleware}