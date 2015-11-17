'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

var authMiddleware = require('../config/auth');

router.get('/', authMiddleware, function(req, res) {
  res.render('profile');
});

router.post('/logout', function(req, res) {
  res.clearCookie('username');
  res.clearCookie('userId');
  res.send();
})


module.exports = router;
