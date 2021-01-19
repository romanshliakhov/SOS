$(function() {
	$('select').styler();
});

$(document).ready(function(){
	$('.features-tab_title').click(function(){
		$(this).next('.features-tab_descr').slideToggle();
	})
});


var text = $('.menu').text(),
textArr = a.split('');

$('.menu').html('');

$.each(textArr, function(i, v){
if(v == ' '){$('.menu').append('<a class="space"></a>');}
$('.menu').append('<a>'+v+'</a>');
});






