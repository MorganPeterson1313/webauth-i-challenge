const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const bcrypt = require('bcryptjs');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
var app = express()
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


server.get('/api/posts', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})




 
app.options('/', cors()) // enable pre-flight request for DELETE request
app.del('/', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})


app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})


module.exports = server;
