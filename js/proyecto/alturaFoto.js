$(document).on('ready',function(){
	$('.columna').css('height', $('.columna').css('width'));
});

$(window).resize(function(){
	$('.columna').css('height', $('.columna').css('width'));
});