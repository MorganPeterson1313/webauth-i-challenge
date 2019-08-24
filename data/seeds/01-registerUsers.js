
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('registerUsers').del()
    .then(function () {
      // Inserts seed entries
      return knex('registerUsers').insert([
        {email: 'm@lambda.com', username:'momo', password:'lambda'},
        {email: 'a@lambda.com', username:'ambi', password:'ambi'},
      ]);
    });
};
