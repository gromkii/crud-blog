var bookshelf = require('../db/bookshelf'),
    User      = require('./User');

var Comment = bookshelf.Model.extend({
  tableName: 'comments',
  users: function() {
    return this.belongsTo(User);
  }
})

module.exports = Comment;
