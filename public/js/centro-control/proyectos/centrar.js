$(window).on('resize', function(){
	centrar();
});

function centrar(){
	$('#centraContenidoAgregarProyecto').css('margin-top', $('#centraContenidoAgregarProyecto').height()/2*-1);
}