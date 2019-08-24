
exports.up = function(knex) {
    return knex.schema
    .createTable('registerUsers', tbl => {
      tbl.increments();
      tbl.string('email', 128)
        .unique()
        .notNullable();
        tbl.text('username',128)
        .unique()
        .notNullable();
        tbl.text('password',128)
        .notNullable();
    })
    
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('registerUsers')
};
