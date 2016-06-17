var bookshelf = require('../db/bookshelf');
var Post = require('./post')

var User = bookshelf.Model.extend({
  tableName: 'users',
  posts: function(){
    return this.hasMany(Post)
  },

  //Added to allow listing of all users comments.
  comments: function(){
    return this.hasMany(Comment)
  }
})

module.exports = User;
