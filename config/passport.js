import passport from 'passport';
import LocalStrategy from 'passport-local';
import { User } from '../models/user.js';

const verifyCallback = async (username, password, done) => {
    try {
        const user = await User.findOne({username});
        if(!user) done(null, false);
        const isValid = await user.validatePassword(password);
        if(!isValid) done(null, false);
        done(null, user);
        
    } catch (error) {
        done(error);
    }
}

const strategy = new LocalStrategy.Strategy(verifyCallback);
passport.use(strategy);
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( async (userId, done) => {
    try {
        const user = await User.findById(userId);
        if(user) done(null, user);
    } catch (error) {
        done(error);
    }
});

