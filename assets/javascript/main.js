$(function() {

  var header = $('header');
  var navbar = $('.navbar');
  var sticky = header.scrollTop();
  
  function stickyNav() {
    if (window.pageYOffset > sticky) {
      navbar.addClass('sticky');
    } else {
      navbar.removeClass('sticky');
    }
  };
  
  $(window).scroll(function() {
    stickyNav();
  });

  $('.nav-link').click(function(e) {
    var dest = $(this).attr('dest');

    $('html, body').animate({
      scrollTop: $('.' + dest).offset().top-100
    }, 800);
  });
  
})