
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments').del(),

    // Inserts seed entries
    knex('comments').insert({
      user_id: 2,
      post_id: 1,
      comment: 'nm hbu'
    }),
    knex('comments').insert({
      user_id: 3,
      post_id: 1,
      comment: 'look at me'
    }),
    knex('comments').insert({
      user_id: 2,
      post_id: 3,
      comment: 'no'
    })
  );
};
