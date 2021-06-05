(function ($) {
    "use strict";
    $(".close-btn").on("click", function () {
        $(".search-overlay").fadeOut();
        $(".search-btn").show();
        $(".close-btn").removeClass("active");
    });
    $(".search-btn").on("click", function () {
        $(this).hide();
        $(".search-overlay").fadeIn();
        $(".close-btn").addClass("active");
    });
    $(window).on("scroll", function() {
        if ($(document).scrollTop() > 20) {
            $(".custom-nav").addClass("fixed-top");
        }
        else {
            $(".custom-nav").removeClass("fixed-top");
        }
    });
      // active nav
      $('.navbar-nav .nav-item').on('click', function() {
          $('.navbar-nav .nav-item.active').removeClass('active');
          $(this).addClass('active');
      });
       // back to top
    $(".back2").click(function() {
        $('html, body').animate({
        scrollTop: 0,
        }, 1000);
    });
    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 500){
          $('.back2').addClass('aaa');
          $('.aaa').fadeIn(500);
        }
        else if(scrolling > 200){
          $('.aaa').fadeOut(500);
        }
        });

})(jQuery);
