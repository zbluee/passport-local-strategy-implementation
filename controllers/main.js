import { User } from '../models/user.js';

const home = async (req, res) => {
    res.render('home');
}

const getLogin = async (req, res) => {
    res.render('login');
}

const getRegister = async (req, res) => {
    res.render('register')
}

const postRegister = async (req, res) => {    
    await User.create({...req.body});
    res.redirect('/login');
}

const protectedRoute = async (req, res) => {
    res.send('<h1>You are authenticated</h1><p><a href="/logout">Logout and reload</a></p>'); 
}

const adminRoute = async (req, res) => {
    res.send('<h1>Admins route</h1><p><a href="/logout">Logout and reload</a></p>'); 
}

const loginSuccess = async (req, res) => {
    res.render('success');
}

const loginFailure = async (req, res) => {
    res.render('failure');
}

const logout = async (req, res) => {
    req.logout((err)=> {
        if(err) throw err
        res.redirect('/protected-route');

    });
    
}


export { adminRoute, home, getLogin, getRegister, postRegister, protectedRoute, loginFailure, loginSuccess, logout}