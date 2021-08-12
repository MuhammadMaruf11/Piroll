(function ($) {

    'use strict';

    /*------------------------------------
        Mobile Menu
    --------------------------------------*/

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    $('.side-icon > a').on('click', function(event){
        event.preventDefault();
        $('.side-bar-menu').addClass('active')
    });

    $('.close-icon > a').on('click', function(event){
        event.preventDefault();
        $('.side-bar-menu').removeClass('active')
    });


    /*-------------------------------------------
        Sticky Header
    --------------------------------------------- */

    let win = $(window);
    let sticky_id = $(".header-area");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });


    /*------------------------------------
        Overlay Close
    --------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

    $('#scrollUp').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    /*------------------------------------
            Odometer Counter
        --------------------------------------*/

    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    /*------------------------------------
         skillbar plugin
     --------------------------------------*/


    $('.skillbar').skillbar({

        speed: 2000

    });


    /*------------------------------------
       venobox plugin
   --------------------------------------*/

    $('.venobox').venobox();


    /*------------------------------------
            Slider
        --------------------------------------*/

    if (jQuery(".slider-active-wrap .swiper-container").length > 0) {
        let sliderActive1 = '.slider-active-wrap .swiper-container';
        let sliderInit1 = new Swiper(sliderActive1, {
            // Optional parameters
            slidesPerView: 1,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: true,
            effect: 'fade',

            autoplay: {
                delay: 5000,
            },

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                // type: 'fraction',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            a11y: false
        });

        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + ' [data-animation]').each(function () {
                    let anim = $(this).data('animation');
                    let delay = $(this).data('delay');
                    let duration = $(this).data('duration');

                    $(this).removeClass('anim' + anim)
                        .addClass(anim + ' animated')
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration
                        })
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass(anim + ' animated');
                        });
                });
            };
            animated();
            // Make animated when slide change
            init.on('slideChange', function () {
                $(sliderActive1 + ' [data-animation]').removeClass('animated');
            });
            init.on('slideChange', animated);
        }

        animated_swiper(sliderActive1, sliderInit1);
    }
    /*------------------------------------
          timeline  Slider
        --------------------------------------*/

    // Slider With Thumbs
    if (jQuery(".timeline-slider-active .swiper-container").length > 0) {
        let timeLineSlider = new Swiper('.timeline-slider-active .swiper-container', {
            // Optional parameters
            slidesPerView: 5,
            slidesPerColumn: 1,
            loop: true,

            autoplay: {
                delay: 2000,
            },

            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
            },

            a11y: false

        });
    }




})(jQuery);
