$(document).on('ready', function(){

	determinarLogeado();

	$(document).on('click', '#cerrarSesion', function(){
		cerrarSesion();
	});

	$(document).on('click', '#figureAgregarProyecto', function(){
		subirProyecto();
	});

	$(document).on('click', '#textoAgregarProyecto', function(){
		subirProyecto();
	});


});