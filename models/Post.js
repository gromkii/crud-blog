var bookshelf = require('../db/bookshelf');
var Comments = require('./comment')

var Post = bookshelf.Model.extend({
  tableName: 'posts',
  posts: function(){
    return this.hasMany(Comments)
  }
})

module.exports = Post;
