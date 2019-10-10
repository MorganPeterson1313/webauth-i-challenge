const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const bcrypt = require('bcryptjs');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

server.use(cors());


const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router.js');
const postsRouter = require('./posts/post-router')
const sessionOptions = {
name: 'monkey',
secret: 'mywhiteunicornisactuallygeenwithagoldhorn',
cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true
},
resave:false,
saveUninitialized: true,
store: new knexSessionStore({
        knex: require('./data/dbConfig'),
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearIinterval: 1000 * 60 * 60

        })
}


const server = express();


server.use(express.json());

server.use(helmet());
server.use(session(sessionOptions));

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.json({ api: 'up' });
});

module.exports = server;
