(function ($) {
    "use strict";

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', 0);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    //Testimonials carousel
    $(".about-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        // navText : [
        //     '<i class="bi bi-arrow-left"></i>',
        //     '<i class="bi bi-arrow-right"></i>'
        // ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:3
            }
        }
    });

    //Client Logo
    $(".client-logo-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : false,
        margin:10,
        // navText : [
        //     '<i class="bi bi-arrow-left"></i>',
        //     '<i class="bi bi-arrow-right"></i>'
        // ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:6
            }
        }
    });


     //Partner Logo
     $(".partner-logo-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : false,
        margin:50,
        // navText : [
        //     '<i class="bi bi-arrow-left"></i>',
        //     '<i class="bi bi-arrow-right"></i>'
        // ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:4
            }
        }
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        nav : false, 
        margin:20,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    $('.why-us-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        // smartSpeed:1000,
        // autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    
})(jQuery);

