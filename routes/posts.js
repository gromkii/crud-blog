var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/post'),
    User    = require('../models/user');

router.route('/')
  .get( (req, res) => {
    Post
      .fetchAll({withRelated: ['users']})
      .then( results => {
        var posts = results.toJSON();

        res.render('posts/index', {posts: posts, users: posts.users});
      });
  });

router.route('/:post_id')
  .get( (req, res) => {
    var id = req.params.post_id;
    Post
      .where('id',id)
      .fetch({withRelated: ['users', 'comments']})
      .then( results => {
        var post = results.toJSON()
            comments = results.related('comments')
              .fetch({withRelated:['users']})
              .then( commentResult => {
                commentsObject = commentResult.toJSON();
                console.log(commentsObject);
                res.render('posts/show', {post:post, comments:commentsObject})

              });
      });
  });


module.exports = router;
