// JavaScript to hide the navbar on scroll
var previousScroll = 0;

window.addEventListener('scroll', function () {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > previousScroll) {
    // Scrolling down, hide the navbar
    document.querySelector('.navbar').classList.add('scrolled');
  } else {
    // Scrolling up, show the navbar
    document.querySelector('.navbar').classList.remove('scrolled');
  }

  previousScroll = currentScroll;
});