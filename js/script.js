$(document).ready(function(){

  $('.cases__slider-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    dots: false,
    arrows: true,
    swipe: false,
    nextArrow: $(document).find('.cases__controls-arrow_left'),
    prevArrow: $(document).find('.cases__controls-arrow_right'),
    asNavFor: '.cases__info-items'
   });


   $('.cases__info-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    dots: false,
    arrows: false,
    swipe: false,
    asNavFor: '.cases__slider-items'
   });



   $('.success__about-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    dots: false,
    arrows: true,
    /* swipe: false, */
    nextArrow: $(document).find('.success__about-arrow_right'),
    prevArrow: $(document).find('.success__about-arrow_left'),
    asNavFor: '.success__info-slider'
   });

   $('.success__info-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    dots: false,
    arrows: false,
    /* swipe: false, */
    asNavFor: '.success__about-slider'
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
  
  

  

  
    });