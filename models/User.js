var bookshelf = require('../db/bookshelf');
var Post = require('./Post');
var Comment = require('./Comment');

bookshelf.plugin('registry');

var User = bookshelf.Model.extend({
  tableName: 'users',
  posts: function(){
    return this.hasMany(Post, 'user_id')
  },

  //Added to allow listing of all users comments.
  comments: function(){
    return this.hasMany(Comment)
  }
})

module.exports = User;
