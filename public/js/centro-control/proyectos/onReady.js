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

	$(document).on('click', '.proyectoDB .imagenProyecto', function(){
		localStorage.setItem('proyectoSeleccionado', $(this).parent().attr('id'));
		location.href = 'proyectoSeleccionado.html';
	});

	$(document).on('click', '.proyectoDB .nombreProyecto', function(){
		localStorage.setItem('proyectoSeleccionado', $(this).parent().attr('id'));
		location.href = 'proyectoSeleccionado.html';
	});
});