var bookshelf = require('../db/bookshelf'),
    User      = require('./user');

var Comment = bookshelf.Model.extend({
  tableName: 'comments',
  users: function() {
    return this.belongsTo(User);
  }
})

module.exports = Comment;
