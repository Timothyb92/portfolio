window.onload = () =>  {
  window.onscroll = () => stickyNav();
  
  const header = document.querySelector('.header');
  const navbar = document.querySelector('.navbar');
  
  const sticky = header.offsetTop;
  
  function stickyNav() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }

  document.querySelector('.nav-link')

}