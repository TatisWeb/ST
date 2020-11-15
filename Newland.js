$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
});

$('.btn-bay').on('click', function(e) {
 e.preventDefault();
 $('.modal-s').toggleClass('show');
});

$('.menu-btn').on('click', function(m) {
 m.preventDefault();
 $(this).toggleClass('menu-btn_active');
});

//$('.btn-bay').click ( function() 
//  $('.mainfoto').removeClass('wow zoomIn');
 //   $('p').removeClass('wow zoomInUp');
 //   new WOW().init();
   // $(this).toggleClass('wow hinge ');

  
//});


$('.modal-btn').on('click', function(e) {
  e.preventDefault();
  $('.modal-s').removeClass('show');
  //$('.body').removeClass('no-scroll');
});




