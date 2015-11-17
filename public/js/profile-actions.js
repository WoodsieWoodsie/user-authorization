'use strict';

$(document).ready(init);

function init() {
  populateInfo();
  $('.logout').click(logout);
  $('.heading').on('click', '.editProfile', showEditFields);
  $('.saveEdits').click(saveEdits);
}

function saveEdits() {
  // console.log($('.username').text());
  var username = $('.username').val();
  var name = $('.editName').val();
  var email = $('.editEmail').val();
  var avatar = $('.editAvatar').val();
  var birthday = $('.editBirthday').val();
  var aboutMe = $('.editAboutMe').val();

  $.ajax({
    url: "/profiles",
    type: "PUT",
    data: {
      username: username,
      name: name,
      email: email,
      avatar: avatar,
      birthday: birthday,
      aboutMe: aboutMe
    }
  })
  .done()
}

function showEditFields() {
  $('.editInfoCol').show();
}

function populateInfo() {
  $.get('/profiles')
  .done(function(userInfo){
    console.log('User info loaded.')
  })
  .fail(function(err){
    console.error(err);
  });
}

function logout() {
  $.post('/profiles/logout')
  .done(function(){
    window.location.replace('/');
  });
}