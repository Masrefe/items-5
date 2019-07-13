(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.smoth-scroll[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


       var wow = new WOW({
            mobile: false
        });
        wow.init();

  var mixer = mixitup("#portfolio-list");


       /* meanmenu */
        $('.menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991"
        });




	if ($('#back-to-top').length) {
    var scrollTrigger = window.innerHeight, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }

   
    $('#main-menu').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing'
    });

  //searchForm
    $('.search-box .search-btn a').on( "click", function(){
        $('.searchForm').toggleClass('active');
    });

})(jQuery); 


