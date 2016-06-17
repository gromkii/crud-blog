var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/post'),
    User    = require('../models/user');

router.route('/')
  // Show indexed posts, associated users, and content.
  .get( (req, res) => {
    Post
      .fetchAll({withRelated: ['users']})
      .then( results => {
        var posts = results.toJSON();

        res.render('posts/index', {posts: posts, users: posts.users});
      });
  })
  //Post a new blog post.
  .post( (req, res) => {
    var post = req.body;

    Post({
      post:post.user_id,
      post:post.title,
      post:post.post
    },'id')
      .save()
      .then( () => {
        res.redirect('/posts');
      })
  })
  //Edit a post.
  .put( (req, res) => {

  });

router.route('/new')
// Show new post page, list available users to post as. (Can't auth yet, #rip)
.get( (req, res) => {
  User
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
      .where('id',id)
      .fetch({withRelated: ['users', 'comments']})
      .then( results => {
        var post = results.toJSON()
            // After finding associated comments, find users associated with commentid.
            comments = results.related('comments')
              .fetch({withRelated:['users']})
              .then( commentResult => {
                commentsObject = commentResult.toJSON();
                console.log(commentsObject);
                res.render('posts/show', {post:post, comments:commentsObject})

              });
      });
  })
  // Post a new comment.
  .post( (req, res) => {

  })

  // Edit a post's content.
  .put( (req, res) => {

  });


router.route('/:post_id/comment')
  //Show new comment page, and list available users to post as.
  .get( (req, res) => {
    var post_id = req.params.post_id;

    //Get post by ID, fetchall users.
  });


module.exports = router;
