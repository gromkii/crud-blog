var bookshelf = require('../db/bookshelf');
var Comments = require('./Comment'),
    User     = require('./User');

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
