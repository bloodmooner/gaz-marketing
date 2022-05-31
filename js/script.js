$(window).on('load', function () {
    $('.loader').delay(1800).fadeOut('slow');
});
  
$(document).ready(function(){


  let activeMenuItem = $('.header__menu-item_active');

  $( ".header__menu-item" ).mouseover(function() {
    $( ".header__menu-item" ).removeClass('header__menu-item_active');
    $(this).addClass('header__menu-item_active');
  });

  $( ".header__menu" ).mouseleave(function() {
    $('.header__menu-item').removeClass('header__menu-item_active');
    /* activeMenuItem.addClass('header__menu-item_active'); */
  });







  $("a.promo__plan").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });




  let menuIsOpen = false;
  //Menu toggle
  $('.header__burger-icon').on('click', function() {
    $('.header-mobile').addClass('header-mobile_active');
    menuIsOpen = true;
  });
  $('.header-mobile__close-image').on('click', function() {
    $('.header-mobile').removeClass('header-mobile_active');
    menuIsOpen = false;
  });

  //Scroll menu

 $(window).scroll(function(){
  var sticky = $('.header'),
      scroll = $(window).scrollTop();

  if (scroll > 0) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});


  //Cases hover and add Class
  $(function () {
    $(".our-casses__list a, .portfolio__list a").hover(onIn, onOut);
  });
  
  function onIn() {
    $(this).find('.our-cases__block').addClass("visible");
  }
  
  function onOut() {
    $(this).find(".our-cases__block").removeClass("visible");
  }


  //Tabs Cases
  $('ul.portfolio__tabs_caption').on('click', 'li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active').closest('.tabs').find('div.portfolio__tabs_content').removeClass('active').eq($(this).index()).addClass('active');
  });


 

  $('.js-open-modal-order').on('click', function(){
    if($('.header-mobile').hasClass('header-mobile_active')) {
      $('.header-mobile').removeClass('header-mobile_active');
    }
    $('.overlays').addClass('overlays_active');
    $('.modal_order').addClass('modal_order-active');
  });
 
  $('.modal__close').on('click', function(){
    $('.overlays').removeClass('overlays_active');
    $('.modal_order').removeClass('modal_order-active');
  });

  $('.js-open-modal-analysis').on('click', function(){
    $('.overlays').addClass('overlays_active');
    $('.modal_analysis').addClass('modal_analysis-active');
  });
 
  $('.modal__close').on('click', function(){
    $('.overlays').removeClass('overlays_active');
    $('.modal_analysis').removeClass('modal_analysis-active');
  });


  

  $('.cases__outer-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    dots: false,
    arrows: true,
    swipe: false,
    nextArrow: $(document).find('.cases__controls-arrow_left'),
    prevArrow: $(document).find('.cases__controls-arrow_right'),
    fade: true,
    cssEase: 'linear'
    /* asNavFor: '.cases__info-items' */
   });


   /* $('.cases__info-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    dots: false,
    arrows: false,
    swipe: false,
    asNavFor: '.cases__slider-items'
   }); */



   $('.success__about-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    dots: false,
    arrows: true,
    swipe: false,
    nextArrow: $(document).find('.success__about-arrow_right'),
    prevArrow: $(document).find('.success__about-arrow_left'),
    fade: true,
    cssEase: 'linear',
    asNavFor: '.success__info-slider,.success__positions-wrapper',
   });

   $('.success__info-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    dots: false,
    arrows: false,
    swipe: false,
    asNavFor: '.success__about-slider',
    fade: true,
    cssEase: 'linear'
   });

   $('.success__positions-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    dots: false,
    arrows: false,
    swipe: false,
    fade: true,
    cssEase: 'linear'
   });

});


$(function() {

    let videoPlayBtn = $('.video__play-btn');
    let videoBg = $('.video__background');
    let videoYoutube = $('.video__youtube');
  
    videoPlayBtn.on('click', function() {
      let videoSrc = videoYoutube.prop('src');
  
      videoYoutube.attr('src', `${videoSrc}&autoplay=1`);
      videoBg.css('display', 'none');
  
      $(".youtube").each(function() {
        // Based on the YouTube ID, we can easily find the thumbnail image
        
  
        // Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', {'class': 'play'}));
  
        
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
  
            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': '100%', 'height': '100%' })
  
            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        
    });
  });
  
  
  //Before After Image
  $(".slider").on("input change", (e)=>{
  const sliderPos = parseInt(e.target.value);

  // Update the width of the foreground image
  $('.foreground-img').css('width', `${sliderPos}%`)
  // Update the position of the slider button
  $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
  });


  //Before After Slider
  $('.cases__slider-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    dots: false,
    arrows: true,
    swipe: false,
    nextArrow: $(document).find('.cases__image-arrow-left'),
    prevArrow: $(document).find('.cases__image-arrow-right'),
    fade: true,
    cssEase: 'linear'
    /* asNavFor: '.cases__info-items' */
   });


   $('.cases__slider-image').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    
  
    $('.foreground-img').css({
      'width': '51%'
    });
    $('.slider-button').css({
      'left': 'calc(51% - 18px)'
    });
    $('input[type=range]').val(50.5);

  });
  
});

