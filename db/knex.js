var environment = 'heroku' || process.env.NODE_ENV || 'development',
    config      = require('../knexfile')[environment],

module.exports  = require('knex')(config);
