(function() {
    'use strict';

    angular.module('common')
    .factory('AnimationsFactory', AnimationsFactory);

    function AnimationsService() {

        var service = this;

        service.loadAllAnimations = function () {
            service.welcomeUser();
            service.mobileMenuOutsideClick();
    		service.formTab();
    		service.offcanvasMenu();
    		service.burgerMenu();
    		service.dropdown();
    		service.owlCarousel();
    		service.goToTop();
            service.smoothScroll();
    		service.counterWayPoint();
    		service.parallax();
        }

        service.welcomeUser = function () {
            angular.element('.gtco-loader').fadeOut('slow');
            angular.element('body').css('position', 'static');
            angular.element('body').css('overflow', 'auto');
            angular.element('body').css('width', 'initial');
        }

        service.mobileMenuOutsideClick = function() {

            $(document).click(function (e) {

                    var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");

                    if (!container.is(e.target) && container.has(e.target).length && $(e.target).attr("href"))  { //close if true
                        $('.js-gtco-nav-toggle').addClass('gtco-nav-white');

                        if ( $('body').hasClass('offcanvas') ) {

                            $('body').removeClass('offcanvas');
                            $('.js-gtco-nav-toggle').removeClass('active');
                        }
                    }

            });

        };

        service.formTab = function() {

            $('.tab-menu a').on('click', function(event){
                var $this = $(this),
                    data = $this.data('tab');

                $('.tab-menu li').removeClass('active');
                $this.closest('li').addClass('active')

                $('.tab .tab-content-inner').removeClass('active');
                $this.closest('.tab').find('.tab-content-inner[data-content="'+data+'"]').addClass('active');

                event.preventDefault();

            });

        };

        service.offcanvasMenu = function() {

            $('#page').prepend('<div id="gtco-offcanvas" />');
            $('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
            var clone1 = $('.menu-1 > ul').clone();
            $('#gtco-offcanvas').append(clone1);
            var clone2 = $('.menu-2 > ul').clone();
            $('#gtco-offcanvas').append(clone2);

            $('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
            $('#gtco-offcanvas')
                .find('li')
                .removeClass('has-dropdown');

            // Hover dropdown menu on mobile
            $('.offcanvas-has-dropdown').mouseenter(function(){
                var $this = $(this);

                $this
                    .addClass('active')
                    .find('ul')
                    .slideDown(500, 'easeOutExpo');
            }).mouseleave(function(){

                var $this = $(this);
                $this
                    .removeClass('active')
                    .find('ul')
                    .slideUp(500, 'easeOutExpo');
            });


            $(window).resize(function(){

                if ( $('body').hasClass('offcanvas') ) {

                    $('body').removeClass('offcanvas');
                    $('.js-gtco-nav-toggle').removeClass('active');

                }
            });
        };


        service.burgerMenu = function() {

            $('body').on('click', '.js-gtco-nav-toggle', function(event){
                var $this = $(this);


                if ( $('body').hasClass('overflow offcanvas') ) {
                    $('body').removeClass('overflow offcanvas');
                } else {
                    $('body').addClass('overflow offcanvas');
                }
                $this.toggleClass('active');
                event.preventDefault();

            });
        };


        service.dropdown = function() {

            $('.has-dropdown').mouseenter(function(){

                var $this = $(this);
                $this
                    .find('.dropdown')
                    .css('display', 'block')
                    .addClass('animated-fast fadeInUpMenu');

            }).mouseleave(function(){
                var $this = $(this);

                $this
                    .find('.dropdown')
                    .css('display', 'none')
                    .removeClass('animated-fast fadeInUpMenu');
            });

        };


        service.owlCarousel = function(){

            var owl = $('.owl-carousel-carousel');
            owl.owlCarousel({
                items: 3,
                loop: true,
                margin: 20,
                nav: true,
                dots: true,
                smartSpeed: 800,
                autoHeight: true,
                navText: [
                  "<i class='ti-arrow-left owl-direction'></i>",
                  "<i class='ti-arrow-right owl-direction'></i>"
                ],
                responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
                }
            });


            owl = $('.owl-carousel-fullwidth');
            owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 20,
                nav: true,
                dots: true,
                smartSpeed: 800,
                autoHeight: true,
                navText: [
                  "<i class='ti-arrow-left owl-direction'></i>",
                  "<i class='ti-arrow-right owl-direction'></i>"
                ]
            });

        };

        service.goToTop = function() {

            $(window).scroll(function(){

                var $win = $(window);
                if ($win.scrollTop() > 200) {
                    $('.js-top').addClass('active');
                } else {
                    $('.js-top').removeClass('active');
                }

            });

            $('.js-gotop').on('click', function(event){

                event.preventDefault();

                $('html, body').animate({
                    scrollTop: $('html').offset().top
                }, 500, 'easeInOutExpo');

                return false;
            });


        };

        service.smoothScroll = function () {
             $('a[href^="#"]').click(function(e) {
                var offset = angular.element(e.currentTarget).attr('data-offset');
                try {

                    offset = offset || 0
                    $('html, body').animate({
                        scrollTop: $( $(this).attr('href') ).offset().top - offset
                    }, 500);
                }
                catch (e) {
                    //console.log('anchor not found');
                }
                return true;
            });
        }

        service.counter = function() {
            $('.js-counter').countTo({
                 formatter: function (value, options) {
              return value.toFixed(options.decimals);
            },
            });
        };

        service.counterWayPoint = function() {
            if ($('#gtco-counter').length > 0 ) {
                $('#gtco-counter').waypoint( function( direction ) {

                    if( direction === 'down' && !$(this.element).hasClass('animated') ) {
                        setTimeout( service.counter , 400);
                        $(this.element).addClass('animated');
                    }
                } , { offset: '90%' } );
            }
        };

        service.parallax = function() {
            $(window).stellar({
                horizontalScrolling: false,
                hideDistantElements: false,
                responsive: true

            });
        };

        return service;

    }

    function AnimationsFactory() {
        return function () {
            return new AnimationsService();
        }
    }

}());
