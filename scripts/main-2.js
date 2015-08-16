;

(function ($) {
    $.fn.mySlider = function (options) {

        var settings = $.extend({
            'slideToShow': '1',
            'nav'        : true,
            'prevSlide'  : "<button class='prev'>prev slide</button>",
            'nextSlide'  : "<button class='next'>next slide</button>"

        }, options);

        function mySlider(){

        }

        return this.each(function () {

            $('.slider > *').wrapAll('<div class="slider-draggable"></div>').addClass("slide-item");

            var itemSlide = $('.slide-item'),
                sliderOuter = $('.slider-draggable'),
                wSlider = sliderOuter.width(),
                nSlides = itemSlide.length,
                wItem = Math.ceil(wSlider / settings.slideToShow),
                firstSlide = itemSlide.first().index(),
                lastSlide = itemSlide.last().index(),
                currentSlide = firstSlide,
                nSlide = firstSlide + 1,
                pSlide = lastSlide;

            //added wrapper
            sliderOuter.wrap('<div class="wrap"></div>').width(wItem * nSlides);

            $('.wrap').append(settings.prevSlide + settings.nextSlide + "<ul class='slider-nav'></ul>");


            //add nav

            if (settings.nav === true) {

                var list = $(".slider-nav"),
                    items = list.children().index();

                for (items = 0; items < nSlides; items++) {
                    list.append("<li><button data-target='slide'>" + items + "</button></li>").find('li').first().addClass('slide-active');
                    $(".slider-nav button").data('target');
                }

            }

            //added styles to slider elements
            itemSlide.css({
                'width': wItem
            });

            sliderOuter.css({
                'position': 'relative',
                'overflow': 'hidden'
            });

            $('.slider .next').click(function () {
                nSlide = currentSlide == lastSlide ? firstSlide : currentSlide + 1;
                sliderOuter.css({
                    'transform': 'translate3d(-' + nSlide * wItem + 'px, 0, 0)'
                });

                currentSlide = nSlide;
            });

            $('.slider .prev').click(function () {
                pSlide = currentSlide == firstSlide ? lastSlide : currentSlide - 1;
                sliderOuter.css({
                    'transform': 'translate3d(-' + pSlide * wItem + 'px, 0, 0)'
                });
                currentSlide = pSlide;
            });

        });

    };

})(jQuery);


