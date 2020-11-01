$('a.open-modal').click(function(event) {
  $(this).modal({
    fadeDuration: 250
  });
  return false;
});

$("#custom-close").modal({
  closeClass: 'icon-remove',
  closeText: '!'
});

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
});

$('.menu-btn').on('click', function(m) {
  m.preventDefault();
  $(this).toggleClass('menu-btn_active');
});
  

$(document).ready(function() {
  
  $("#fade").modal({
  fadeDuration: 100,
  fadeDelay: 0.50
  
});


  
  
  $('.btn-bay').click ( function() {
    
    $('.mainfoto').removeClass('wow zoomIn');
    $('p').removeClass('wow zoomInUp');
    new WOW().init();
    $(this).toggleClass('wow hinge ');

  
});
});

