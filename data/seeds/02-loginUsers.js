
exports.seed = function(knex) {
  // Deletes ALL existing entries
 // Deletes ALL existing entries
 return knex('registerUsers').del()
 .then(function () {
   // Inserts seed entries
   return knex('registerUsers').insert([
     {email: 'test', username:'test', password:'test'},
     {email: 'a_tpeterson@yahoo.com', username:'manita', password:'manita'},
   ]);
 });
};
