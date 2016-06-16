var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/Post');

router.route('/')
  .get( (req, res) => {
    Post
      .orderBy('id')
      .fetchAll()
      .then( (posts) => {
        res.render('posts/index', { posts: posts });
      });

  });


module.exports = rouer;
