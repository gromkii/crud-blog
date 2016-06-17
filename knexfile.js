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
    connection: 'postgres://ydxcdewkghpwpd:FxdQS6CD6P9q6B5H6ldeLPmFPP@ec2-50-17-253-74.compute-1.amazonaws.com:5432/d4bsbap7ba7rn1',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  heroku: {
    client: 'pg',
    connection:'postgres://ydxcdewkghpwpd:FxdQS6CD6P9q6B5H6ldeLPmFPP@ec2-50-17-253-74.compute-1.amazonaws.com:5432/d4bsbap7ba7rn1'
  }

};
