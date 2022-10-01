import { UnauthenticationError } from '../errors/errors.js'

const adminMiddleware = (req, res, next) => {
    if (!req.user.admin || !req.isAuthenticated()) throw new UnauthenticationError('not an admin');
    next();
}

export {adminMiddleware}