var express = require('express'),
    router  = express.Router(),
    User    = require('../models/User');

router.route('/')
  // Show all users.
  .get( (req, res) => {
    new User()
      .orderBy('id')
      .fetchAll()
      .then( users => {
        res.render('users/users', { users: users.toJSON() });
      });
  })

  // Add new user.
  .post( (req, res) => {
    var user = req.body;

    new User({
      name: user.name,
      username: user.username,
      avatar_url: user.avatar_url
    })
      .save()
      .then( () => {
        res.redirect('/users');
      });
  });

router.route('/new')
  // Route to new user page.
  .get( (req, res) => {
    res.render('users/new');
  });

router.route('/:id')
  // Show user by id.
  .get( (req, res) => {
    var id = req.params.id;

    new User({ id : id })
      .fetch()
      .then( user => {
        res.render('users/show', { user : user.toJSON() });
      });
  })
  // Edit user by id.
  .put( (req, res) => {
    var id   = req.params.id,
        user = req.body;
    new User({
      name : user.name,
      username : user.username,
      avatar_url : user.avatar_url
    }).save({ update : true })
      .then( () => {
        res.redirect(`/author/${id}`);
      });
  });

router.route('/:id/edit')
  // Edit user by id.
  .get( (req, res) => {
    var id = req.params.id;

    User({ id: id })
      .fetch()
      .then( user => {
        res.render('user/edit', ({ user: user }));
      });
  });

module.exports = router;
