$( document ).ready(function() {

  var location = window.location.href;
    var pathname = window.location.pathname;
		if (pathname == '/' || pathname ==''){
			$('.nav li:first').addClass('active');
		}
		else{
			$('.nav li a').each(function(){
				if(location.indexOf(this.href)>-1) {
          var item=$(this).parent();
				   $(item).addClass('active');
				}
			});
		}
  
   $('img').addClass('img-responsive');

 	$(window).scroll(function() {
	    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
	    {
	        $('.opaque-navbar').addClass('opaque');
	    } else {
	        $('.opaque-navbar').removeClass('opaque');
        }
        
        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
    
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();
    
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        if (isScrolledIntoView('.vision') === true) {
            $('.box').addClass('animate fadeInUp one');
            $('.box2').addClass('animate fadeInDown two');
            $('.box3').addClass('animate fadeInLeft three');
        }
        // else {
        //     $('.box').removeClass('animate fadeInUp one');
        //     $('.box2').removeClass('animate fadeInDown two');
        //     $('.box3').removeClass('animate fadeInLeft three');
        // }

        if (isScrolledIntoView('#sect3') === true) {
            $('.product3').addClass('animate fadeInUpBig one');
            $('.work3').addClass('animate fadeIn two');
        }

        if (isScrolledIntoView('.what-cont') === true) {
          $('.cont').addClass('animate fadeInUp one');
            $('.cont2').addClass('animate fadeInDown two');
            $('.cont3').addClass('animate fadeInUp three');
      }
      //   if (isScrolledIntoView('statement') === true) {
      //     $('.statement').addClass('animate fadeInUpBig one');
      //     $('.round').addClass('animate fadeIn two');
      // }
        
	});

  
  $('.accordion').accordion();
  
});

//Main Plugin Code
(function ($) {
    $.fn.accordion = function (options) {
  
      var defaults = {
        activeClass: 'active',
        slideSpeed: 500
      };
  
      //variables
      var element = $(this);
      var settings = $.extend({}, defaults, options);
  
      // elements
      var titleElement = null;
      var contentElement = null;
  
  
      var init = function(){
        initializeSelectors();
        start();
        initializeListeners();
      }
  
      var initializeSelectors = function(){
        titleElement = element.find('.accordion-title');
        contentElement = element.find('.accordion-content');
      }
  
      var start = function () {
        titleElement.first().addClass(settings.activeClass);
        contentElement.not(':nth-child(2)').hide();
      }
  
      var initializeListeners = function(){
        titleElement.click(function(){
          $(this).toggleClass(settings.activeClass).
          siblings().
          removeClass(settings.activeClass);
          
          $(this).next().slideToggle(settings.slideSpeed).
          siblings(".accordion-content").
          slideUp(settings.slideSpeed);
        });
      }
  
      init();
    };
  
  })(jQuery);