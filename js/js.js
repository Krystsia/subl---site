/*require.config({
    baseUrl: 'js',
    paths: {
        TweenMax: 'uncompressed/TweenMax',
        TimelineMax: 'uncompressed/TimelineMax',
        jquery: 'jquery',
        ScrollMagic: 'scrollmagic',
        EasePack: 'uncompressed/easing/EasePack',
        mousewheel: 'jquery.mousewheel',
        myParallax1: 'jquery.myParallax1.js'
    }
});
require(["app","ScrollMagic","jQuery","TweenMax","TimelineMax","animation.gsap","EasePack","bootstrap","jquery.mousewheel","jquery.myParallax1"], function(app, ScrollMagic,jQuery,TweenMax,TimelineMax) {*/
       
    $(document).ready(function(){
    if($('.wrapper').hasClass('index')){
    var controller = new ScrollMagic.Controller();
    
    var tween = TweenMax.to(".animate3", 2, {left: '60%',yoyo: true,ease:Back.easeOut})
    
     /*var scene = new ScrollMagic.Scene({
									triggerElement: ".frame2",
                                    duration: '50%'
								})
                                .setTween(tween)
								.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
								.addTo(controller)
   
    var scene2 = new ScrollMagic.Scene({
									triggerElement: ".frame2",
                                    duration: '50%'
								})
                                .setTween(".frame2", 1, {opacity: 1,ease: Back.easeOut})
								.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
								.addTo(controller)
    var tween2 = TweenMax.to(".animate2", 2, {left: '10%',yoyo: true,ease:Back.easeOut})
    var scene3 = new ScrollMagic.Scene({
									triggerElement: ".frame2",
                                    duration: '50%'
								})
                                .setTween(tween2)
								.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
								.addTo(controller);*/
    
    var sceneBlock2 = new ScrollMagic.Scene({
        triggerElement: ".pinContainer",
        
    })
    
    .setTween('.services',0,{transform: 'scale(.95)',opacity: 1,ease:Back.easeInOut})
    .addTo(controller);
    var wind = window.innerHeight;
    var tween3 = new TimelineMax()
        .fromTo('.frame1',1,{x: '-100%'},{x:'0%', ease: Linear.easeNone})
        .fromTo('.frame2',1,{x: '100%'},{x:'0%', ease: Linear.easeNone})
        .fromTo('.frame3',1,{y: '-100%',display:'none'},{y:'0%',display: 'block', ease: Linear.easeNone})
    var scene4 = new ScrollMagic.Scene({
        offset: -60,
        triggerElement: ".pinContainer",
        triggerHook: '0',
        duration: '300%',
    })
    .setPin('.pinContainer',{
        pushFollowers: true
    })
    .setTween(tween3)
    
    .addTo(controller);
    
   
    
    }
    });
                      
   /*services*/ 
    $(document).ready(function(){
   
      
    var rotate = 0;
    $(document).mousemove(function(e){
        var clientX = e.clientX;
        var clientY = e.clientY;
        var windowHeight = $(window).height()/2;
        var windowWidth = $(window).width()/2;
        var x = clientX - windowWidth;
        var y = -(clientY - windowHeight);
        var tangens = y/x;
        var deg = tangens/Math.PI*180;
        rot = deg-rotate;
        rotate += rot
        
        $('.logo').css('transform','rotate('+-(rotate)+'deg)')
        
        
    })
    
    /*scrolling
    function scr(){
        if(revivsion === "no"){
    var st = $('body').scrollTop();
    var h = $(window).height();
        if(st<h*0.4&& st > 0){
            $('body').animate({
                scrollTop: 0
            },1000)
            
        }else if(st>h*0.4&& st < h){
             $('body').animate({
                scrollTop: (h-60),
            },1000)
        }else if(st<h*1.4&& st > h){
             $('body').animate({
                scrollTop: (h-60),
            },1000)
        }else if(st>h*1.4&& st < 2*h){
             $('body').animate({
                scrollTop: (2*h-60),
            },1000)
        }
        else if(st<h*2.4&& st > 2*h){
             $('body').animate({
                scrollTop: (2*h-60),
            },1000)
        }else if(st>h*2.4&& st < 3*h){
             $('body').animate({
                scrollTop: (3*h-60),
            },1000)
        }
        else if(st<h*3.4&& st > 3*h){
             $('body').animate({
                scrollTop: (3*h-60),
            },1000)
        }
        };
        
    };
    
        
        
      var revivsion = 'no';
    
    $(window).load(function(){
        scr();
         setInterval(scr,1000);
        setInterval(function(){
            revivsion = 'no';
        },100);
        
    })
    .scroll(function(){
        revivsion = 'yes';
    })
    
    $(window).on( 'mousewheel', function (e) { 
       
    var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
    e.preventDefault(); 
    e.stopPropagation(); 
    $(document.body).stop().animate( { 
         scrollTop : nt 
     } , 200  );  
} )
   */
    
    
    
    $('.parallax').myParallax();
        
    $('.slider').mySlider({
            inter: 5000
    });
        
    $('.gal-wrapper').myGallery({
        offsetTop: 0
    });
        $('.repContr').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            $(this).css('cursor','default');
            $('body').css({
                'overflow':'hidden',
                
            })
            $('.rep').css('display','block')
                        .animate({
                opacity: 1,
            },1000);
            
            
        })
        $('.cross').on('click',function(e){
            $('.repContr').css('cursor','pointer');
            $('body').css('overflow','scroll')
            $('.rep').animate({
                opacity: 0,
            },1000).css('display','none');
        })
        function crossFix(){
            var offset = $('.rep').scrollTop();
        $('.cross').css({
            'top': offset+40+'px'
        })
        };
        $('.rep').scroll(function(){
            crossFix();
        })
        
        
        
        
        
        
       
        
    })
    
    
    
    

