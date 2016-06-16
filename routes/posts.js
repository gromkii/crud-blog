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

        res.json(posts);
        // res.render('posts/index', {posts: posts, users: posts.users});
      });
  });


module.exports = router;
