import {} from 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import crypto from 'crypto';
import path from 'path';
import { mainRoute } from './routes/main.js';
// middleware
import { errorHandlerMiddleware } from './middleware/error-handler.js';
import { notFoundMiddleware } from './middleware/notFound.js';
import { connectDB } from './db/connection.js';
import { sessOptions } from './config/session-options.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.resolve('public')));
app.set('view engine', 'ejs');

//session setup
app.use(session(sessOptions));


import './config/passport.js';
app.use(passport.initialize());
app.use(passport.session());


//routes

app.use( mainRoute);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => console.log(`Server is listening on port ${port}`));
    } catch (error) {
        
    }
}

start();