$(document).ready(function(){
	$('select').styler();
	
	$('.features-tab_title').click(function(){
		$(this).next('.features-tab_descr').slideToggle();
	})


	jQuery(".m1").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".about").offset().top + 50
        }, 1000);
	});

	jQuery(".m2").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".features").offset().top
        }, 1000);
	});

	jQuery(".m3").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".config").offset().top +50
        }, 1000);
	});

	jQuery(".m4").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".quotes").offset().top + 120
        }, 1000);
	});

	wow = new WOW(
		{
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       true,       // default
		live:         true        // default
	  }
	  )
	  wow.init();

	var text = $('.menu').text(),
	textArr = split('');
	
	$('.menu').html('');
	
	$.each(textArr, function(i, v){
	if(v == ' '){$('.menu').append('<a class="space"></a>');}
	$('.menu').append('<a>'+v+'</a>');
	});
});











