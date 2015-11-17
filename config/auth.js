'use strict';

var User = require('../models/user');

module.exports = function(req, res, next){
  console.log("COOKIES", req.cookies)
  var userId = req.cookies.userId;
  User.findById(userId, function(err, user){
    if(err || !user) return res.status(401).send(err || 'Authentication required.');
    next();
  });
};