'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

// USERS

router.post('/register', function(req, res) {
  User.register(req.body, function(err, savedUser){
    res.status(err ? 400 : 200).send(err || savedUser);
  });
});

router.post('/login', function(req, res) {
  User.authenticate(req.body, function(err, user){
    res.cookie('username', user.username);
    res.cookie('userId', user._id.toString());
    res.status(err ? 400 : 200).send(err || user);
  });
});

module.exports = router;
