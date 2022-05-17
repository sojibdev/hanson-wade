(function ($) {
    $(function () {



        // Phone nav click function
        $('.hemberger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });


        var $window = $(window);

        $('.sub-nav').parent('li').addClass('has-sub-nav')
        if ($window.width() > 768) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.mouseenter(function () {
                    $this.find('.sub-nav').fadeIn()
                    $("body").addClass("sub-navShown");
                })
                $this.mouseleave(function () {
                    $this.find('.sub-nav').fadeOut();
                    $("body").removeClass("sub-navShown");
                })
            })
        }

        if ($window.width() < 769) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.find('> a').click(function (e) {
                    var $$this = $(this);
                    e.preventDefault()
                    console.log('event')
                    $this.find('.sub-nav').slideToggle()
                })
            })
        }

        var header = new Headroom(document.querySelector('header'), {
            tolarence: 80,
            offset: 55,
            classes: {

                initial: 'headroom',
                pinned: 'slidedown',
                unpinned: 'slideup',
                top: "headroom--top",
                notTop: "headroom--not-top",
                bottom: "headroom--bottom",
                notBottom: "headroom--not-bottom",
                frozen: "headroom--frozen",


            }
        });
        header.init();

        if ($('.marquee-slider-to-right').length) {
            $('.marquee-slider-to-right').marquee({
                direction: 'left',
                duration: 50000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }
        if ($('.marquee-slider-to-left').length) {
            $('.marquee-slider-to-left').marquee({
                direction: 'right',
                duration: 50000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }

        if ($('.testimonial-item-wrap').length) {
            $('.testimonial-item-wrap').slick({
                arrows: true,
                infinite: false,
                autoplay: true,
                navigation: true,
                autoplaySpeed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                centerMode: false,
                focusOnSelect: true,
                fade: true,
                adaptiveHeight: true,
                pauseOnHover: true,
            });
            $(window).on('resize', function () {
                $('.testimonial-item-wrap').slick('resize');
            });
        }

        if ($('.network-experience-component-wrap').length) {
            $('.network-experience-component-wrap').slick({
                autoplay: false,
                autoplaySpeed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: false,
                responsive: [{
                    breakpoint: 768,
                    settings: 'unslick'
                }]
            })

            $(window).on('resize', function () {
                $('.network-experience-component-wrap').slick('resize');
            });
        }


        // Start Contact Js
        $('.selectric-shown').click(function () {
            var $$_this = $(this);
            $('.selectric-dropdown').slideToggle();
        })

        $('.selectric-dropdown ul li').click(function () {
            var thisText = $(this).text();
            $('.selectric-shown').text(thisText)
            $('.selectric-dropdown').slideUp();

        })
        // End Contact Js

        // Start About Js
        $('.team-member-item').each(function () {
            var $this = $(this);
            $this.find('.team-member-content a').click(function (e) {
                var $$this = $(this);
                e.preventDefault()
                console.log('event')
                $this.find('.team-member-content p span').slideToggle()
                $$this.toggleClass('seemore-active');

                $$this.parent($this).toggleClass("show")

                if ($$this.text() == "More") {
                    $(this).text("Less")
                } else {
                    $(this).text("More")
                }
            })
        })



        // End About Js

        


    }) // End ready function.



    var $animation_elements = $('.animate-from-bottom');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            if (element_top_position <= window_bottom_position) {
                $element.addClass('in-view');
            } else {}
        });
    }
    $window.on('scroll resize',check_if_in_view);$window.trigger('scroll');


})(jQuery)