(function($) {

    $.fn.myParallax = function(options) {
         var settings = $.extend({
                    speed: 18
                },options);
        return this.each(function() {

            var ths = $(this);
            ths
                .css({
                    "min-height": "400px",
                    "position": "relative",
                    "overflow": "hidden"

                })
                .wrapInner('<div class="parallax-content"  style="position:relative;z-index:1;">')
                .prepend('<div class = "image-parallax" style = "position:absolute;top:0;width:100%;background:url(' + ths.data('parallax-image') + ') center ;background-size:cover;">');


            function parallaxInit() {
               
                var pheight = ths.height();
                ths.children('.image-parallax').css({
                    "height": pheight*2  + 'px',
                    "top": -pheight + 'px'
                });
                var st = $(document).scrollTop();
                var sp = ths.offset().top - $(window).height();
                var sr = st - sp;
                var ob = ths.offset().top + pheight;
                

                if ((st >= sp) && (st <= ob)) {
                    ths.children('.image-parallax').css({
                        '-webkit-transform': 'translate3d(0px,' + st/settings.speed + '%, 0px)',
                        'transform': 'translate3d(0px,' + sr/settings.speed + '%, 0px)'
                    })
                }

            }




            $(window).scroll(function() {
                parallaxInit();
            }).load(function() {
                parallaxInit()
            });
            $('*').resize(function() {
                parallaxInit();
            })

        });
    };

})(jQuery)