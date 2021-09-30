/*---------------------------
      Table of Contents
    --------------------
    
    01- Mobile Menu
    02- Sticky Navbar
    03- Module Search 
    04- Scroll Top Button
    05- Set Background-img to section 
    06- Add active class to accordions
    07- Load More Items
    08- Owl Carousel
    09- Popup Video
    10- CounterUp
    11- portfolio Filtering and Sorting
      
 ----------------------------*/

$(function () {

    "use strict";

    // Global variables
    var $win = $(window);

    /*==========   Mobile Menu   ==========*/
    var $navToggler = $('.navbar-toggler');
    $navToggler.on('click', function () {
        $(this).toggleClass('actived');
    })
    $navToggler.on('click', function () {
        $('.navbar-collapse').toggleClass('menu-opened');
    })

    /*==========   Sticky Navbar   ==========*/
    $win.on('scroll', function () {
        if ($win.width() >= 992) {
            var $navbar = $('.sticky-navbar');
            if ($win.scrollTop() > 80) {
                $navbar.addClass('fixed-navbar');
            } else {
                $navbar.removeClass('fixed-navbar');
            }
        }
    });

    /*==========   Scroll Top Button   ==========*/
    var $scrollTopBtn = $('#scrollTopBtn');
    // Show Scroll Top Button
    $win.on('scroll', function () {
        if ($(this).scrollTop() > 700) {
            $scrollTopBtn.addClass('actived');
        } else {
            $scrollTopBtn.removeClass('actived');
        }
    });
    // Animate Body after Clicking on Scroll Top Button
    $scrollTopBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /*==========   Set Background-img to section   ==========*/
    $('.bg-img').each(function () {
        var imgSrc = $(this).children('img').attr('src');
        $(this).parent().css({
            'background-image': 'url(' + imgSrc + ')',
            'background-size': 'cover',
            'background-position': 'center',
        });
        $(this).parent().addClass('bg-img');
        $(this).remove();
    });

    /*==========   Add active class to accordions   ==========*/
    $('.accordion__item-header').on('click', function () {
        $(this).parent('.accordion-item').addClass('opened');
        $(this).parent('.accordion-item').siblings().removeClass('opened');
    })
    $('.accordion__item-title').on('click', function (e) {
        e.preventDefault()
    });

    /*==========   Load More Items  ==========*/
    function loadMore(loadMoreBtn, loadedItem) {
        $(loadMoreBtn).on('click', function (e) {
            e.preventDefault();
            $(this).fadeOut();
            $(loadedItem).fadeIn();
        })
    }

    loadMore('.loadMoreBlog', '.hidden-blog-item');
    loadMore('.loadMoreportfolio', '.portfolio-hidden > .portfolio-item');

    /*==========   Owl Carousel  ==========*/
    $('.carousel').each(function () {
        $(this).owlCarousel({
            nav: $(this).data('nav'),
            dots: $(this).data('dots'),
            loop: $(this).data('loop'),
            margin: $(this).data('space'),
            center: $(this).data('center'),
            dotsSpeed: $(this).data('speed'),
            autoplay: $(this).data('autoplay'),
            transitionStyle: $(this).data('transition'),
            animateOut: $(this).data('animate-out'),
            animateIn: $(this).data('animate-in'),
            autoplayTimeout: 15000,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: $(this).data('slide-sm'),
                },
                700: {
                    items: $(this).data('slide-md'),
                },
                1000: {
                    items: $(this).data('slide'),
                }
            }
        });
    });

    // Owl Carousel With Thumbnails
    $('.thumbs-carousel').owlCarousel({
        thumbs: true,
        thumbsPrerendered: true,
        loop: true,
        margin: 0,
        autoplay: $(this).data('autoplay'),
        nav: $(this).data('nav'),
        dots: $(this).data('dots'),
        dotsSpeed: $(this).data('speed'),
        transitionStyle: $(this).data('transition'),
        animateOut: $(this).data('animate-out'),
        animateIn: $(this).data('animate-in'),
        autoplayTimeout: 15000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*==========  Popup Video  ==========*/
    $('.popup-video').magnificPopup({
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });

    /*==========   counterUp  ==========*/
    $(".counter").counterUp({
        delay: 10,
        time: 4000
    });

    /*==========   portfolio Filtering and Sorting  ==========*/
    $("#filtered-items-wrap").mixItUp();
    $(".portfolio-filter li a").on("click", function (e) {
        e.preventDefault();
    });
});

$(document).ready(function(){
    $('.customer-logoskkk').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        
        
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});

setInterval(slideshow,3000);
slide=0;
function slideshow() {
  slide = slide + 1;
  var slidex = document.getElementsByClassName("slide");
  if (slide >= slidex.length) {
		slide = 0;
	  }
  if(slide==0)
  {
	slidex[slidex.length-2].style.left = "-110%";
	slidex[slidex.length-1].style.left = "-45%";
	slidex[0].style.left = "20%";
	slidex[1].style.left = "85%";
	slidex[2].style.left = "150%";
	slidex[2].style.opacity = "0";
	slidex[slidex.length-1].style.opacity = "1";
	slidex[slidex.length-1].style.filter = "blur(4px)";
	slidex[0].style.opacity = "1";
	slidex[0].style.filter = "blur(0)";
	slidex[1].style.opacity = "1";
	slidex[1].style.filter = "blur(4px)";
	slidex[slidex.length-2].style.transition = "left 2s";
	slidex[slidex.length-1].style.transition = "2s";
	slidex[0].style.transition = "2s";
	slidex[1].style.transition = "2s";
  }
  else if(slide==1)
  {
	slidex[slidex.length-1].style.left = "-110%";
	slidex[0].style.left = "-45%";
	slidex[1].style.left = "20%";
	slidex[2].style.left = "85%";
	slidex[3].style.left = "150%";
	slidex[3].style.opacity = "0";
	slidex[0].style.opacity = "1";
	slidex[0].style.filter = "blur(4px)";
	slidex[1].style.opacity = "1";
	slidex[1].style.filter = "blur(0)";
	slidex[2].style.opacity = "1";
	slidex[2].style.filter = "blur(4px)";
	slidex[slidex.length-1].style.transition = "left 2s";
	slidex[0].style.transition = "2s";
	slidex[1].style.transition = "2s";
	slidex[2].style.transition = "2s";
  }
  else if(slide==slidex.length-1)
  {
	slidex[slidex.length-3].style.left = "-110%";
	slidex[slidex.length-2].style.left = "-45%";
	slidex[slidex.length-1].style.left = "20%";
	slidex[0].style.left = "85%";
	slidex[1].style.left = "150%";
	slidex[1].style.opacity = "0";
	slidex[slidex.length-2].style.opacity = "1";
	slidex[slidex.length-2].style.filter = "blur(4px)";
	slidex[slidex.length-1].style.opacity = "1";
	slidex[slidex.length-1].style.filter = "blur(0)";
	slidex[0].style.opacity = "1";
	slidex[0].style.filter = "blur(4px)";
	slidex[slidex.length-3].style.transition = "left 2s";
	slidex[slidex.length-2].style.transition = "2s";
	slidex[slidex.length-1].style.transition = "2s";
	slidex[0].style.transition = "2s";
  }
  else if(slide==slidex.length-2)
  {
	slidex[slidex.length-4].style.left = "-110%";
	slidex[slidex.length-3].style.left = "-45%";
	slidex[slidex.length-2].style.left = "20%";
	slidex[slidex.length-1].style.left = "85%";
	slidex[0].style.left = "150%";
	slidex[0].style.opacity = "0";
	slidex[slidex.length-3].style.opacity = "1";
	slidex[slidex.length-3].style.filter = "blur(4px)";
	slidex[slidex.length-2].style.opacity = "1";
	slidex[slidex.length-2].style.filter = "blur(0)";
	slidex[slidex.length-1].style.opacity = "1";
	slidex[slidex.length-1].style.filter = "blur(4px)";
	slidex[slidex.length-4].style.transition = "left 2s";
	slidex[slidex.length-3].style.transition = "2s";
	slidex[slidex.length-2].style.transition = "2s";
	slidex[slidex.length-1].style.transition = "2s";
  }
  else
  {
	slidex[slide-2].style.left = "-110%";
	slidex[slide-1].style.left = "-45%";
	slidex[slide].style.left = "20%";
	slidex[slide+1].style.left = "85%";
	slidex[slide+2].style.left = "150%";
	slidex[slide+2].style.opacity = "0";
	slidex[slide-1].style.opacity = "1";
	slidex[slide-1].style.filter = "blur(4px)";
	slidex[slide].style.opacity = "1";
	slidex[slide].style.filter = "blur(0)";
	slidex[slide+1].style.opacity = "1";
	slidex[slide+1].style.filter = "blur(4px)";
	slidex[slide-2].style.transition = "left 2s";
	slidex[slide-1].style.transition = "2s";
	slidex[slide].style.transition = "2s";
	slidex[slide+1].style.transition = "2s";
  }
      
}
