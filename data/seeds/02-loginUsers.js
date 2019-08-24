
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('loginUsers').del()
    .then(function () {
      // Inserts seed entries
      return knex('loginUsers').insert([
        {userName: 'momo', password:'lambda'},
        {userName: 'ambi', password:'bambi'},
      ]);
    });
};
