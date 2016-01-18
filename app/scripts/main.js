$(function() {
  "use strict"
  var navbar = $('#navbar-container');

  $( window ).scroll(function() {
    if ($(this).scrollTop() > 150) {
      navbar.addClass('scroll-down');
    }

    if ($(this).scrollTop() === 0) {
      navbar.removeClass('scroll-down');
    }
  });
});
