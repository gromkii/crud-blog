var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/Post'),
    User    = require('../models/User'),
    Comment = require('../models/Comment');

router.route('/')
  // Show indexed posts, associated users, and content.
  .get( (req, res) => {
    Post
      .fetchAll({ withRelated: ['user']})
      .then( results => {
        var posts = results.toJSON();
        res.render('posts/index', { posts: posts });
      })
  })
  //Post a new blog post.
  .post( (req, res) => {
    var post = req.body;

    new Post({
      user_id:post.user_id,
      title:post.title,
      post:post.post
    })
      .save()
      .then( (model) => {
        res.redirect('/posts');
      })
  })
  //Edit a post.
  .put( (req, res) => {

  });

router.route('/new')
// Show new post page, list available users to post as. (Can't auth yet, #rip)
.get( (req, res) => {
  new User()
  .fetchAll()
  .then( results => {
    var users = results.toJSON();

    res.render('posts/new', { users : users });
  });
});

router.route('/:post_id')
  // Show post by id and associated user comments.
  .get( (req, res) => {
    var id = req.params.post_id;
    Post
      .where('id', id)
      .fetch({ withRelated : ['user', 'comments']})
      .then( results => {
        var post = results.toJSON();

        res.render('posts/show', { post: post})
      });
  })
  // Post a new comment.
  .post( (req, res) => {

  })

  // Edit a post's content.
  .put( (req, res) => {

  })

  // Remove a post.
  .delete( (req, res) => {

  });


router.route('/:post_id/comment')
  //Show new comment page, and list available users to post as.

  //This shit is not working yet.
  .get( (req, res) => {
    var post_id = req.params.post_id;

    User.fetchAll()
      .then( users => {
        new Post().fetch({ id: post_id })
          .then ( post => {
            res.render('posts/comment', { users: users.toJSON(), post: post.toJSON() });
          });
      });

  });

router.route('/:post_id')
  .get( (req, res) => {
    var id = req.params.post_id;
    Post
      .where('id',id)
      .fetch({withRelated: ['user', 'comments']})
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
