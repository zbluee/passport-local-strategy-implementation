import { UnauthenticationError } from '../errors/errors.js'

const authMiddleware =  (req, res, next) => {
    if (!req.isAuthenticated()) throw new UnauthenticationError('unauthrozied');
    next();
}

export {authMiddleware}