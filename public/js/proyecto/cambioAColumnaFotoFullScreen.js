$(document).on('ready',function(){

	$(window).resize(function(){
		cambioAColumna();
	});

	$(document).on('click','#divCerrar, #fotoEncabezadoComentariosFullScreen, #proyectoComentariosFullScreen, .flechas',function(){
		salir();
	});

	$(document).on('click','.flechas img',function(e){
		e.stopPropagation()
	});

	$(document).keyup(function(e) {
	    if (e.keyCode == 27) {
	    	salir();
	    }
	});



});

function salir(){
	$('#centraTodo').remove();
	$('#main').css('height', 100+'%');
	$('#main').css('overflow', 'auto');
}

function cambioAColumna(){

	var ancho = window.innerWidth;



	if(ancho <= 735){

		foto = $( "#fotoFullScreen" ).detach();
	 	encabezado = $('#encabezadoComentariosFullScreen');
	 	$(foto).insertAfter(encabezado);

	 	cantidadMeGusta = $( "#cantidadMeGusta" ).detach();
	 	totalComentarios = $('#totalComentariosFullScreen');
	 	$(totalComentarios).prepend(cantidadMeGusta);

	}else if(ancho > 735){

		foto = $( "#fotoFullScreen" ).detach();
	 	flechaIzquierda = $('#flechaIzquierda');
	 	$(foto).insertAfter(flechaIzquierda);

	 	cantidadMeGusta = $( "#cantidadMeGusta" ).detach();
	 	fechaPost = $('#fechaPost');
	 	$(cantidadMeGusta).insertBefore(fechaPost);
	}
}