// const bcrypt = require('bcryptjs');

// const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
console.log(req.session.user)
  if (req.session && req.session.user) {
  next();
  } else {
    res.status(401).json({ message: 'you shall not pass' });
  }
};



// Users.findBy({ username })
// .first()
// .then(user => {
//   if (user && bcrypt.compareSync(password, user.password)) {
//     next();
//   } else {
//     res.status(401).json({ message: 'Invalid Credentials' });
//   }
// })
// .catch(error => {
//   res.status(500).json({ message: 'Ran into an unexpected error' });
// });