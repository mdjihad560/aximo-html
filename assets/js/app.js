"use strict";

(function ($) {
  "use strict";

  /*------------------------------------------------------------------
  [Table of contents]
  fugu STICKY MENU JS INIT
  fugu COUNTER JS INIT
  fugu TEXT SLIDER
  fugu TEXT SLIDER 2
  fugu CLIENT SLIDER
  fugu CLIENT SLIDER 2
  fugu TESTIMONIAL SLIDER
  fugu TESTIMONIAL SLIDER 2
  fugu PRICING TABLE JS INIT
  fugu SCROLL EFFECT TWO JS INIT 01
  fugu SCROLL EFFECT TWO JS INIT 02
  fugu MAGNIFIC POPUP JS INIT
  fugu GALLERY MASONAY FILTER JS 01
  fugu GALLERY MASONAY FILTER JS 02
  fugu GALLERY MASONAY FILTER JS 03
  fugu MAP JS
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    fugu PRELOADER JS INIT
    --------------------------------------------------------------*/

    // $(".fugu-preloader").fadeOut(500);

    /*--------------------------------------------------------------
    fugu SCROLL TOP JS INIT
    --------------------------------------------------------------*/
    // const myText = new SplitType('.my-text');

    // gsap.registerPlugin(ScrollTrigger);

    // const animateText = () => {
    //   gsap.to('.char', {
    //     y: 0,
    //     stagger: 0.05,
    //     delay: 0.4,
    //     duration: .2
    //   });
    // };

    // const triggerElement = document.querySelector('.my-text');

    // ScrollTrigger.create({
    //   trigger: triggerElement,
    //   onEnter: animateText
    // });

    /*--------------------------------------------------------------
    fugu STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
    COUNTER JS INIT
    --------------------------------------------------------------*/
    var aximo_counter = $('#aximo-counter');
    if (aximo_counter.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(aximo_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.aximo-counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }

    /*--------------------------------------------------------------
    fugu PRICING TABLE JS INIT
    ------------------------------------------------------------*/

    /*--------------------------------------------------------------
    fugu PRICING TABLE JS INIT
    ------------------------------------------------------------*/
    var auto_slider = new Swiper('.aximo-auto-slider', {
      spaceBetween: 0,
      centeredSlides: true,
      speed: 7000,
      autoplay: {
        delay: 1
      },
      loop: true,
      slidesPerView: 'auto',
      allowTouchMove: false,
      disableOnInteraction: true
    });

    /*--------------------------------------------------------------
    fugu PRICING TABLE JS INIT
    ------------------------------------------------------------*/
    var swiper = new Swiper(".aximo-project-slider", {
      // Optional parameters
      spaceBetween: 30,
      centeredSlides: true,
      // grabCursor: true,
      // freeMode: false,
      loop: true,
      mousewheel: false,
      autoplay: {
        delay: 4000
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // Responsive breakpoints
      breakpoints: {
        640: {
          slidesPerView: 1
        },
        900: {
          slidesPerView: 2
        },
        1600: {
          slidesPerView: 3
        }
      }
    });

    /*--------------------------------------------------------------
    fugu MAGNIFIC POPUP JS INIT
    ------------------------------------------------------------*/
    var popup_youtube = $('.aximo-video-popup');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {
    /*--------------------------------------------------------------
    fugu GALLERY MASONAY FILTER JS 01
    ------------------------------------------------------------*/
    // var fugu_gallery_masonay1 = $('#fugu-gallery-masonay1');
    // if(fugu_gallery_masonay1.is_exist()){
    //   var $container = $(fugu_gallery_masonay1),
    //     colWidth = function () {
    //       var w = $container.width(), 
    //         columnNum = 1,
    //         columnWidth = 0;
    //       if (w > 1200) {
    //         columnNum  = 4;
    //       } else if (w > 900) {
    //         columnNum  = 3;
    //       } else if (w > 600) {
    //         columnNum  = 2;
    //       } else if (w > 450) {
    //         columnNum  = 2;
    //       } else if (w > 385) {
    //         columnNum  = 1;
    //       }
    //       columnWidth = Math.floor(w/columnNum);
    //       $container.find('.fugu-grid-item').each(function() {
    //         var $item = $(this),
    //           multiplier_w = $item.attr('class').match(/fugu-grid-item-w(\d)/),
    //           multiplier_h = $item.attr('class').match(/fugu-grid-item-h(\d)/),
    //           width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
    //           height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
    //         $item.css({
    //           width: width,
    //           // height: height
    //         });
    //       });
    //       return columnWidth;
    //     },
    //     isotope = function () {
    //       $container.isotope({
    //         resizable: false,
    //         itemSelector: '.fugu-grid-item',
    //         masonry: {
    //           columnWidth: colWidth(),
    //           gutterWidth: 0
    //         }
    //       });
    //     };
    //   isotope();
    //   $(window).resize(isotope);
    //   var $optionSets = $('.fugu-gallery-menu .option-set'),
    //       $optionLinks = $optionSets.find('li');
    //   $optionLinks.click(function(){
    //   var $this = $(this);
    //     var $optionSet = $this.parents('.option-set');
    //     $optionSet.find('.active').removeClass('active');
    //     $this.addClass('active');

    //     // make option object dynamically, i.e. { filter: '.my-filter-class' }
    //     var options = {},
    //         key = $optionSet.attr('data-option-key'),
    //         value = $this.attr('data-option-value');
    //     // parse 'false' as false boolean
    //     value = value === 'false' ? false : value;
    //     options[ key ] = value;
    //     if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
    //       // changes in layout modes need extra logic
    //       changeLayoutMode( $this, options )
    //     } else {
    //       // creativewise, apply new options
    //       $container.isotope( options );
    //     }
    //     return false;
    //   });
    // }
  }); // End window LODE

  /*--------------------------------------------------------------
  fugu MAP JS
  ------------------------------------------------------------*/
  // var google_map = $('#map');
  // if(google_map.is_exist()){
  //   google.maps.event.addDomListener(window, 'load', init);
  //   function init() {
  //     var mapOptions = {
  //         zoom: 11,
  //         scrollwheel: false,
  //         navigationControl: false,
  //         mapTypeControl: false,
  //         scaleControl: false,
  //         draggable: true,
  //         disableDefaultUI: true,
  //         center: new google.maps.LatLng(40.6700, -73.9400), 
  //          styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
  //                 };
  //       var mapElement = document.getElementById('map');

  //       var map = new google.maps.Map(mapElement, mapOptions);

  //       var marker = new google.maps.Marker({
  //         position: new google.maps.LatLng(40.6700, -73.9400),
  //         map: map,
  //         icon: 'assets/images/all-img/contact/map.png',
  //         title: 'fugu'
  //       });
  //       var contentString = '<div id="content">' +
  //           '<div id="tpw">' +
  //           '<h3>fugu' +
  //           '</div>';

  //       var infowindow = new google.maps.InfoWindow({
  //           content: contentString,
  //           maxWidth: 280
  //       });

  //       marker.setAnimation(google.maps.Animation.BOUNCE);
  //       setTimeout(function(){ marker.setAnimation(null); }, 750);  //time it takes for one bounce   

  //       google.maps.event.addListener(marker, 'click', function () {
  //           infowindow.open(map, marker);
  //       });

  //     }

  // }

  // wow js
  // var wow = new WOW({
  //   mobile: false,       // default
  //   tablet:false
  // });
  // wow.init();

  AOS.init({
    duration: 1200
  });
})(jQuery);