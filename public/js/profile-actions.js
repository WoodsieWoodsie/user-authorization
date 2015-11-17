'use strict';

$(document).ready(init);

function init() {
  $('.logout').click(logout);
}

function logout() {
  $.post('profiles/logout')
  .done(function(){
    window.location.replace('/');
  });
}