
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      name: 'Jeff',
      username: 'jeffinator',
      avatar_url: 'http://placecage.com/c/200/200'
    }),
    knex('users').insert({
      name: 'Hank',
      username: 'hankinator',
      avatar_url: 'http://placecage.com/c/200/200'
    }),
    knex('users').insert({
      name: 'Frank',
      username: 'Frankenstein',
      avatar_url: 'http://placecage.com/c/200/200'
    })
  );
};
