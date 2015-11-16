(function($) {

    $.fn.mySlider = function(options) {
        
        var settings = $.extend({
                    inter: 3000
                },options);
       return this.each(function() {
           var ths = $(this);
           ths.css('position','relative');
           var slide = ths.children('div');
           var len = slide.length;
           
          
           slide.css({
               'position': 'absolute',
               'width': '100%',
               'height': '100%',
               'top': 0,
               'left': 0,
              
               
           })
           slide.each(function() {
                $(this).css({
                    'background': 'url('+$(this).data("slider-image")+') no-repeat',
                    'background-size': 'cover'
                })
           })
                
           
           function mySliderIni(){
                var eq = len-1;
                var s = 1;
                var interv = setInterval(function(){
                   var first = slide.eq(eq);
                    
                   if(s === 1){
                    first.animate({
                        'opacity':'0'},1000);
                       
                   } else {
                    first.animate({
                        'opacity':'1'},1000);;
                       
                   }
                   eq-=s;
                   if(eq === 0 || eq === len) {s = -s};
                },settings.inter)
           }
           $(window).load(function() {
                mySliderIni()
            });
           
           
       })
    }
})(jQuery);