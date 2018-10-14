$(function() {

  var header = $('header');
  var navbar = $('.navbar');
  var sticky = header.scrollTop();
  
  function stickyNav() {
    if (window.pageYOffset > sticky) {
      console.log('If condition good')
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
    console.log(dest)
  });
  
})