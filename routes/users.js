var express = require('express'),
    router  = express.Router(),
    User    = require('../models/User');

router.route('/')
  // Show all users.
  .get( (req, res) => {
    User()
      .collection()
      .fetchAll()
      .then( users => {
        res.render('users/users', { users: users });
      });
  }); // Delete semicolon to add more http methods.

router.route('/new')
  // Make a new user.
  .get( (req, res) => {
    res.render('users/new');
  });

router.route('/:id')
  // Show user by id.
  .get( (req, res) => {
    var id = req.params.id;

    User({ id: id})
      .fetch()
      .then( user => {
        res.render('users/show');
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
