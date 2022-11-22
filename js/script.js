$(function(){

	$('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


 $('.gallery__slider').slick({
     prevArrow: '<img class="slider__arrow slider__arrow-left" src="img/Arrow-left.svg" alt="arrow-left">',
     nextArrow: '<img class="slider__arrow slider__arrow-right" src="img/Arrow-right.svg" alt="arrow-right">',
   //  responsive: [
   //     {
   //        breakpoint: 481,
   //        settings: {
   //          arrows:false,
   //          infinite: true,
   //          dots: true
   //        }
   //     }
   //  ]
 });

 $('.gallery__item-inner').magnificPopup({
   delegate: 'a',
   type: 'image',
   tLoading: 'Loading image #%curr%...',
   mainClass: 'mfp-img-mobile',
   gallery: {
      enabled: true,
      tCounter: '%curr% из %total%',
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
   },
   image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
         return item.el.attr('title') + '<small>Мой текст Мой текст Мой текст</small>';
      }
   }
});

  $('.menu-btn').on('click', function(){
    $('.menu-btn ,.menu__list').toggleClass('active');
    $('body').toggleClass('lock');
 });



jQuery(document).ready(function() {
  var btn = $('#button');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 600) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
});

});



