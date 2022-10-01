import MongoStore from 'connect-mongo'; // session store
//session setup

const sessionStore = MongoStore.create({
    mongoUrl : process.env.MONGO_URL,
    collectionName : 'sessions'
});

const sessOptions = {
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    store : sessionStore,
    cookie : {
        maxAge : 24 * 60 * 60 * 1000
    }
}

export {sessOptions}