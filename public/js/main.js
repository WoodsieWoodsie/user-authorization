'use strict';

$(document).ready(init);

function init() {
  $('.register').click(register);
  $('.login').click(login);
}

function register() {
  var username = $('.registerUsernameInput').val();
  var password = $('.registerPasswordInput').val();
  var confirmPassword = $('.registerConfirmPasswordInput').val();
  if (password !== confirmPassword) {
    console.log("Passwords don't match");
    $('.feedback').text('')
    $('.feedback').text("Passwords don't match, try again.");
    $('.registerPasswordInput').val('');
    $('.registerConfirmPasswordInput').val('');
  } else {
    $.post('users/register', {
      username: username,
      password: password
    })
    .done(function(savedUser){
      console.log("Saved User! ", savedUser);
      $('.feedback').text('')
      $('.feedback').text("You've been registered! Please log in to continue.")
      $('.registerUsernameInput').val('');
      $('.registerPasswordInput').val('');
      $('.registerConfirmPasswordInput').val('');
    })
    .fail(function(err){
      console.log(err);
      $('.feedback').text('');
      $('.feedback').text('Username unavailable. Pick another one!');
    });
  }
}

function login() {
  var username = $('.usernameInput').val();
  var password = $('.passwordInput').val();
  $.post('users/login', {
    username: username,
    password: password
  })
  .done(function(savedUser){
    console.log("Saved User! ", savedUser);
    $('.feedback').text('');
    $('.feedback').text("You've been logged in!")
    $('.usernameInput').val('');
    $('.passwordInput').val('');
    $('.confirmPasswordInput').val('');
    window.location.replace('/profiles');
  });
}


