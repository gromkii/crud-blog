var bookshelf = require('../db/bookshelf');
var User = require('./User');
var Comments = require('./Comment');

var Post = bookshelf.Model.extend({
  tableName: 'posts',
  comments: function(){
    return this.hasMany(Comments)
  },
  user: function(){
    console.log('user', User);
    return this.belongsTo(User, 'user')
  }
})

module.exports = Post;
