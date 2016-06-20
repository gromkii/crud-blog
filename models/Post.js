var bookshelf = require('../db/bookshelf');
var User = require('./User');
var Comment = require('./Comment');

var Post = bookshelf.Model.extend({
  tableName: 'posts',
  comments: function(){
    return this.hasMany(Comment);
  },
  user: function(){
    return this.belongsTo(User);
  }
})

module.exports = Post;
