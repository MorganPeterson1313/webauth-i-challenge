const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const bcrypt = require('bcryptjs');
const express = require('express');

const helmet = require('helmet');
const server = express();


const cors = require('cors');





const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router.js');
const postsRouter = require('./posts/post-router');


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





server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(session(sessionOptions));
server.options('*', cors())
server.use('/api/posts', postsRouter);
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);


// server.get('/', (req, res) => {
//   res.json({ api: 'up' });
// });



server.get('/api/posts/posts', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})


server.use((req , res , next) => {
  res.header("Access-Control-Allow-Origin: https://fitforthesoul.netlify.com", "*");
  res.header("Access-Control-Allow-Credentials", true);
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.header("Access-Control-Allow-Headers: https://fitforthesoul.netlify.com", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
next();
});

 



// var whitelist = ['https://fitforthesoul.netlify.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// server.get('/api/posts', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
// })


server.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})


module.exports = server;
