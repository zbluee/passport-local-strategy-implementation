import express from 'express';
import passport from 'passport';
import { adminRoute, getLogin, getRegister, home, loginFailure, loginSuccess, logout, postRegister, protectedRoute } from '../controllers/main.js';
import { adminMiddleware } from '../middleware/admin.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();
router.get('/', home);

router.route('/login')
    .get( getLogin)
    .post( passport.authenticate('local', {
        successRedirect : '/login-success',
        failureRedirect : '/login-failure'
    }));

router.route('/register')
    .get(getRegister)
    .post(postRegister);

router.get('/logout', logout)
router.get('/login-failure', loginFailure);
router.get( '/protected-route',authMiddleware, protectedRoute);
router.get('/admin-route', adminMiddleware, adminRoute)
router.get('/login-success', loginSuccess);



export {router as mainRoute}