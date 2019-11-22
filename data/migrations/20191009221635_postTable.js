
exports.up = function(knex) {
    return knex.schema.createTable("posts", tbl => {
        tbl.increments();
        tbl.text("name", 128).notNullable();
        tbl.text("title").notNullable();
        tbl.text("description").notNullable();
        tbl
          .text("imgUrl")
          .notNullable()
          .unique();
        tbl
          .integer("RegisteredUser_id")
          .references("id")
          .inTable("registerUsers");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("posts");
};
