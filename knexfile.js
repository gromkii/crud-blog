// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      database: 'crud_blog'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://fdxsllwzegmydp:lgB_UeU0N-8M1SePpUNwE3qPSy@ec2-50-19-239-232.compute-1.amazonaws.com:5432/da4qu166j2ibkd'
  }

};
