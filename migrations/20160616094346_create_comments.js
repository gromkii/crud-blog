
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table =>{
    table.increments().primary();
    table.integer('user_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('users')
      .onDelete('cascade');
    table.integer('post_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('posts')
      .onDelete('cascade');
    table.text('comment');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
