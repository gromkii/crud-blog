var bookshelf = require('../db/bookshelf');

var Comment = bookshelf.Model.extend({
  tableName: 'comments'
})

module.exports = Comment;
