const $ = require('jquery');

$(document).ready(function() {

  // Dom Ready
  console.log(`My body is ready`);
  $("html").addClass("dom-ready");

  // Create Mobile Overlay
  $(".mobile-menu-overlay").append(`<div class="container"></div`);
  $("nav").clone().appendTo(".mobile-menu-overlay .container");

  // Set Selected URL
  var path = window.location.href;
  $('nav ul a').each(function() {
    if (this.href === path) {
      $(this).parent().addClass('selected');
    }
  });

  // Mobile Toggle
  $(document).on('click', '.mobile-menu', function() {
    $('.hamburger-box').toggleClass('is-active');
    $('html').toggleClass('mobile-toggle-active');
  });

  // On Scroll
  $(window).scroll(function(){
        if ($(window).scrollTop() >= 71) {
            $('html').addClass('on-scroll-header');
        }
        else {
            $('html').removeClass('on-scroll-header');
        }
    });

});
