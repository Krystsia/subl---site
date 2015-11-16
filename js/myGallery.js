(function($) {

        $.fn.myGallery = function(options) {
            
           
                

            var settings = $.extend({
                offsetTop: 20,
                widthSlide: '50%',
                frameHeight: null,
                frameWidth: null
                
            }, options);



            return this.each(function() {
                    var ths = $(this);
                    var children = ths.children('div');
                    var len = children.length;

                    ths.css({
                        'position': 'relative',
                    });
                    children.css({
                        'position': 'absolute',
                        
                        'cursor': 'pointer',

                    });
                    children.each(function() {
                        $(this).css({

                            'background': 'url(' + $(this).data("gallery-image") + ') no-repeat',
                            'background-size': 'cover'
                        });

                    })
                    
                        function galleryIni() {
                            var winWidth = $(window).width() - 30;
                            var winHeight = $(window).height();
                            var iconW = settings.frameWidth || winWidth / (len - 1) / 2;
                            var iconH = settings.frameHeight || winHeight/(len-1)/2; 
                            if(winWidth >=748){
                            var l = 0;
                            var t = 0;
                            var z = 0;
                            var pos = len;
                            children.each(function() {
                                $(this).css({
                                    'width': settings.widthSlide,
                                    'left': l + 'px',
                                    'top': t + 'px',
                                    'z-index': z + 'px',
                                });
                                l += iconW;
                                ++z;
                                t += settings.offsetTop;
                                $(this).hover(function() {
                                    $(this).css({
                                        'z-index': pos++,
                                        'top': '60px',
                                       
                                        'transition':'top 1s ease',
                                    });
                                },function(){$(this).css({
                                        'top': 0,
                                        
                                        'transition':'top 1s ease',
                                    });
                                              })

                            })


                        }else{
                            children.css({
                                'width': '100%',
                                'left': 0,
                                'top': 0,
                                'opacity': 1
                            });
                            
                            children.first().addClass('firstSl');
                            children.not('.firstSl').each(function(){
                                $(this).on('click',function(){
                                    var ths = $(this);
                                    ths.animate({
                                        'opacity': 0
                                    },1000);
                                    setTimeout(function(){ths.css('display','none')},1000);  
                                })
                                 $(this).hover(function(){
                                     return false;
                                },function(){
                                     return false;
                                 });
                                
                            });
                            
                            $('.firstSl').on('click',function(){
                                children.css({
                                    
                                    'display':'block'
                                    }).animate({
                                        'opacity': 1
                                    },1000);
                               
                              
                            })
                        }
                        }

                        $(window).load(function() {
                                galleryIni();
                            })
                            .resize(function() {
                                galleryIni();
                            })


                    


                    })
                

            }
        })(jQuery);