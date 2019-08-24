const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('registerUsers').select('id', 'username');
}

function findBy(filter) {
  return db('registerUsers').where(filter);
}

async function add(user) {
  const [id] = await db('registerUsers').insert(user);

  return findById(id);
}

function findById(id) {
  return db('registerUsers')
    .where({ id })
    .first();
}
