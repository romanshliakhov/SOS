$(function() {
	$('select').styler();
});

var text = $('.menu').text(),
textArr = a.split('');

$('.menu').html('');

$.each(textArr, function(i, v){
if(v == ' '){$('.menu').append('<a class="space"></a>');}
$('.menu').append('<a>'+v+'</a>');
})





