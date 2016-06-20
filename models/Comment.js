var bookshelf = require('../db/bookshelf');

require('./User')
require('./Post')

var Comment = bookshelf.Model.extend({
  tableName: 'comments',
  users: function() {
    return this.belongsTo('User');
  },

  posts: function() {
    return this.belongsTo('Post');
  }
})

module.exports = bookshelf.model('Comment', Comment);
