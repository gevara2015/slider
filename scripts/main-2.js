;

(function ($) {
    $.fn.mySlider = function (options) {

        var settings = $.extend({
            'slideToShow': '1',
            'nav'        : true,
            'prevSlide'  : "<button class='prev'>prev slide</button>",
            'nextSlide'  : "<button class='next'>next slide</button>"

        }, options);
        var counter = 0;

        function addedDragWrapper() {
            $('.slider > *').wrapAll('<div class="slider-draggable"></div>').addClass("slide-item");
        }

        addedDragWrapper();

        var itemSlide = $('.slide-item'),
            sliderOuter = $('.slider-draggable');

        function initPlugin() {
            initialItems();
            addedWrapper();
            createNav();
            addedStyles();
            bindEvent();
        }

        function bindEvent() {
            $('.slider .next').click(function () {
                shiftingSlides('next')
            });

            $('.slider .prev').click(function () {
                shiftingSlides('prev');
            });
        }

        function initialItems() {
            wSlider = sliderOuter.width(),
                nSlides = itemSlide.length,
                wItem = Math.ceil(wSlider / settings.slideToShow),
                firstSlide = itemSlide.first().index(),
                lastSlide = itemSlide.last().index(),
                currentSlide = firstSlide,
                nSlide = (firstSlide + 1),
                pSlide = lastSlide;
        }

        /**
         * added wrapper
         * */
        function addedWrapper() {
            sliderOuter.wrap('<div class="wrap"></div>').width(wItem * nSlides);
            $('.wrap').append(settings.prevSlide + settings.nextSlide + "<ul class='slider-nav'></ul>");
        }

        /**
         *add nav
         * */
        function createNav() {
            if (settings.nav === true) {

                var list = $(".slider-nav");
                //items = list.children().index();

                for (items = 0; items < nSlides; items++) {
                    list.append("<li><button>" + items + "</button></li>").find('li').first().addClass('slide-active');
                    $(".slider-nav button").addClass('foo' + items);

                    console.log();
                }

            }
        }

        /*
         * added styles to slider elements
         * **/
        function addedStyles() {
            itemSlide.css({
                'width': wItem
            });

            sliderOuter.css({
                'position': 'relative',
                'overflow': 'hidden'
            });
        }

        function shiftingSlides(direction) {

            var controlObject;
            var lengthSlides = itemSlide.length,
                widthSlider = sliderOuter.width(),
                wItemSlide = Math.ceil(widthSlider / lengthSlides),
                lastSlide = (itemSlide.last().index() - 1);

            function fLastSlide() {
                if (counter == lastSlide) {
                    itemSlide.eq(lengthSlides - 1).addClass("slide-pulse");
                }
            }

            function fFirstSlide() {
                if (counter == lastSlide) {
                    itemSlide.eq(lengthSlides - 1).addClass("slide-pulse");
                }
            }

            function deleteClassLast() {
                itemSlide.removeClass("slide-pulse");
            }

            controlObject = {
                "next": function () {
                    if (counter < lastSlide) {
                        counter++;
                        deleteClassLast();
                        sliderOuter.css({
                            'transform': 'translate3d(-' + counter * wItemSlide + 'px, 0, 0)'
                        });
                    } else {
                        fLastSlide();
                    }
                },
                "prev": function () {
                    counter--;
                    sliderOuter.css({
                        'transform': 'translate3d(-' + counter * wItemSlide + 'px, 0, 0)'
                    });
                }
            };

            if (controlObject.hasOwnProperty(direction)) {
                controlObject[direction]();
            } else {
                throw new Error('incorrect input params in shiftingSlides params')
            }

        }

        /**
         *next slide
         * */
        function fNextSlide() {
            nSlide = currentSlide == lastSlide ? firstSlide : currentSlide + 1;
            sliderOuter.css({
                'transform': 'translate3d(-' + nSlide * wItem + 'px, 0, 0)'
            });

            currentSlide = nSlide;
        }

        /**
         *prev slide
         * */
        function fPrevSlide() {
            pSlide = currentSlide == firstSlide ? lastSlide : currentSlide - 1;
            sliderOuter.css({
                'transform': 'translate3d(-' + pSlide * wItem + 'px, 0, 0)'
            });
            currentSlide = pSlide;
        }

        return initPlugin();

    };

})(jQuery);


