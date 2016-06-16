var bookshelf = require('../db/bookshelf');
var Comments = require('./comment'),
    User     = require('./user');

var Post = bookshelf.Model.extend({
  tableName: 'posts',
  comments: function(){
    return this.hasMany(Comments)
  },
  users: function(){
    return this.belongsTo(User)
  }
})

module.exports = Post;
