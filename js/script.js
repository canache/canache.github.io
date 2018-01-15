///////////////////////////////
// Smart Resize
///////////////////////////////

(function($,sr) {
    var debounce = function (func, threshold, execAsap) {
        var timeout;
        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                    timeout = null;
            };
            if (timeout)
                clearTimeout(timeout); else if (execAsap)
                func.apply(obj, args);
                timeout = setTimeout(delayed, threshold || 100);
        };
    }
  
    // smartresize 
    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };
})

(jQuery,'smartresize');


$(function() {

///////////////////////////////
// Fix the Home Height
///////////////////////////////

    var setHomeBannerHeight = function(){
        var homeHeight= $(window).height();
        $('#overlay-1').height(homeHeight);
    }

    setHomeBannerHeight();

///////////////////////////////
// One page Smooth Scrolling
///////////////////////////////

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            return false;
        }
    }
});

///////////////////////////////
// Center Home Slideshow Text
///////////////////////////////

function centerHomeBannerText() {
    var bannerText = jQuery('#wrapper .starting-text');
    var bannerTextTop = (jQuery('#wrapper').actual('height')/2) - (jQuery('#wrapper .starting-text').actual('height')/2) - 20;
    bannerText.css('padding-top', bannerTextTop+'px');
    bannerText.show();
}

centerHomeBannerText();

jQuery(window).smartresize(function() {
    setHomeBannerHeight();
    centerHomeBannerText();
});
    
});

$(document).ready(function(){
    new WOW().init();
		$("#client-speech").owlCarousel
		({
			autoPlay: 3000,
			navigation : false, // Show next and prev buttons
			slideSpeed : 700,
			paginationSpeed : 1000,
			singleItem:true
		});

    var setHomeBannerHeight = function(){
   var homeHeight= $(window).height();
   $('#overlay-1').height(homeHeight);
    }
    setHomeBannerHeight();  

       
	});





$(document).ready(function(){

  var menu = $('#navigation > .navbar');
  var origOffsetY = $('#bottom').offset().top;

  function scroll() {
     if ($(window).scrollTop() > origOffsetY) {
        menu.addClass('navbar-white');
     } else {
        menu.removeClass('navbar-white');
     }
  }

  document.onscroll = scroll;

});

function goTo(number){
   console.log(number);
   $('ul.pagination li:eq('+number+') a').tab('show');
   //upgradePreNext(number);
}
/*function upgradePreNext(number){
    console.log(number);
   if (number>1){
       $('ul.pagination li:eq(0)').attr("onclick","goTo("+(number-1)+")");
       $('ul.pagination li:eq(0)').attr("class", "previous");
   } else {
       $('ul.pagination li:eq(0)').attr("class", "disabled");
   }
    if (number<2){
       $('ul.pagination li:eq(3)').attr("onclick","goTo("+(number+1)+")");
   } else {
       $('ul.pagination li:eq(3)').attr("class", "disabled");
   }
}*/
$(document).ready(function(){
    $('li.list a').on('click',function(e){
        console.log("coucou");
        number=e.target.innerHTML;
        goTo(number);
        if(number > 1) {
           $('ul.pagination li:eq(0)').attr("current",number-1);
           $('ul.pagination li:eq(0)').attr("class", "previous");
           $('ul.pagination li:eq(3)').attr("class", "disabled");
        }  else {
          $('ul.pagination li:eq(3)').attr("current",+number+1);
          $('ul.pagination li:eq(3)').attr("class", "next");
          $('ul.pagination li:eq(0)').attr("class", "disabled");
        }
  });

  $('li.previous a').on('click',function(e){
        number = $('ul.pagination li:eq(0)').attr("current");
        if(number > 1) {
           $('ul.pagination li:eq(0)').attr("current",number-1);
           $('ul.pagination li:eq(0)').attr("class", "previous");
           $('ul.pagination li:eq(3)').attr("class", "disabled");
        }  else {
          $('ul.pagination li:eq(3)').attr("current",+number+1);
          $('ul.pagination li:eq(3)').attr("class", "next");
          $('ul.pagination li:eq(0)').attr("class", "disabled");
        }
        goTo(number);
  });

    $('li.next a').on('click',function(e){
        number = $('ul.pagination li:eq(3)').attr("current");
        if(number > 1) {
           $('ul.pagination li:eq(0)').attr("current",number-1);
           $('ul.pagination li:eq(0)').attr("class", "previous");
           $('ul.pagination li:eq(3)').attr("class", "disabled");
        }  else {
          $('ul.pagination li:eq(3)').attr("current",+number+1);
          $('ul.pagination li:eq(3)').attr("class", "next");
          $('ul.pagination li:eq(0)').attr("class", "disabled");
        }
        goTo(number);
  });
});