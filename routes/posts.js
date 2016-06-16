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
        var post = results.toJSON(),
            userComment = results.related('comments').fetch({withRelated:['users']})
            .then( commentResult => {
              eval(locus);
            });


        // res.render('posts/show', { post : post });
      })
  });


module.exports = router;
