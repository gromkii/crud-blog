var bookshelf = require('../db/bookshelf'),
    User      = require('./User'),
    Post      = require('./Post');

var Comment = bookshelf.Model.extend({
  tableName: 'comments',
  users: function() {
    return this.belongsTo(User);
  },

  posts: function() {
    return this.belongsTo(Post);
  }
})

module.exports = Comment;
