var bookshelf = require('../db/bookshelf');

// Imports bookshelf models so they actually work.
require('./User');
require('./Comment')

var Post = bookshelf.Model.extend({
  tableName: 'posts',
  comments: function(){
    return this.hasMany('Comment');
  },
  user: function(){
    return this.belongsTo('User');
  }
})

module.exports = bookshelf.model('Post', Post);
