$(document).on('ready',function(){
	// ENCABEZADO

	$(document).on('mouseenter', '#encapsulaLogoNombre', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '#encapsulaLogoNombre', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '#linkedin', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '#linkedin', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '#facebook', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '#facebook', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '#twitter', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '#twitter', function(){
		document.body.style.cursor = 'auto';
	});


	//PROYECTOS DESARROLLADOS
	$(document).on('mouseenter', '.personaSugeridaFigure', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '.personaSugeridaFigure', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '.usernamePersonaSugerida', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '.usernamePersonaSugerida', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '.nombrePersonaSugerida', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '.nombrePersonaSugerida', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '.botonSeguirSugerido', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '.botonSeguirSugerido', function(){
		document.body.style.cursor = 'auto';
	});



	//PROYECTOS DESARROLLADOS
	$(document).on('mouseenter', '.figureQuienPublica', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '.figureQuienPublica', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '.quienPublica', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '.quienPublica', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '.dondePublica', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '.dondePublica', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '.fechaPublicacion', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '.fechaPublicacion', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '.figureMeGusta', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '.figureMeGusta', function(){
		document.body.style.cursor = 'auto';
	});


	//PROYECTO.HTML
	$(document).on('mouseenter', '#webProyecto', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '#webProyecto', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '.columna', function(){
		if($(this).attr('id') == 'columna3' || $(this).attr('id') == 'columna2'){
			//Do nothing
		}else{
			document.body.style.cursor = 'pointer';
		}
	});

	$(document).on('mouseleave', '.columna', function(){
		if($(this).attr('id') == 'columna3' || $(this).attr('id') == 'columna2'){
			//Do nothing
		}else{
			document.body.style.cursor = 'auto';
		}	
	});

	$(document).on('mouseenter', '#cargarMas', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '#cargarMas', function(){
		document.body.style.cursor = 'auto';
	});


	//FULLSCREENPICTURE on Proyecto.html
	$(document).on('mouseenter', '#flechaIzquierda', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '#flechaIzquierda', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '#flechaDerecha', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '#flechaDerecha', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '#fotoEncabezadoComentariosFullScreen', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '#fotoEncabezadoComentariosFullScreen', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '#proyectoComentariosFullScreen', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '#proyectoComentariosFullScreen', function(){
		document.body.style.cursor = 'auto';
	});

	$(document).on('mouseenter', '#fechaPost', function(){
		document.body.style.cursor = 'pointer';
	});

	$(document).on('mouseleave', '#fechaPost', function(){
		document.body.style.cursor = 'auto';
	});

});
