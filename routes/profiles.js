'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

var authMiddleware = require('../config/auth');


router.get(`/`, authMiddleware, function(req, res) {
  console.log(req.cookies.userId);
  User.findById(req.cookies.userId, function(err, user){
    if(err) return res.status(400).send(err);
    console.log(user.username);
    res.render('profile', {
      username: user.username,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      birthday: user.birthday,
      aboutMe: user.aboutMe
    });
  })
});

router.put(`/`, authMiddleware, function(req, res){
  User.findById(req.params.userId, {$set:
    {
      name: req.body.name,
      email: req.body.email,
      avatar: req.body.avatar,
      birthday: req.body.birthday,
      aboutMe: req.body.aboutMe
    }
  })
  res.send()
})

router.post('/logout', function(req, res) {
  res.clearCookie('username');
  res.clearCookie('userId');
  res.send();
})


module.exports = router;
