
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments().primary();
    table.integer('user_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('users')
      .onDelete('cascade');
    table.text('title');
    table.text('post');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
