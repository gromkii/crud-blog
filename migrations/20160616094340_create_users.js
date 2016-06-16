
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments().primary();
    table.string('name');
    table.string('username');
    table.text('avatar_url','longtext');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
