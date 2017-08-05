$(window).on('resize', function(){
	centrar();
});

function centrar(){
	$('#centraContenidoAgregarEntrada').css('margin-top', $('#centraContenidoAgregarEntrada').height()/2*-1);
}