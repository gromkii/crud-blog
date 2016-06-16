
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({
      user_id: 1,
      title: 'Hey',
      post: 'Whats going on?'
    }),
    knex('posts').insert({
      user_id: 2,
      title: 'Oh Man',
      post: 'Where am I?'
    }),
    knex('posts').insert({
      user_id: 3,
      title: 'Why',
      post: 'pls send help'
    })
  );
};
