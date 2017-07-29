$(document).on('ready', function(){

	$(document).on('click','.personaSugeridaFigure',function(){
		var keyProject = $(this).closest('.sugerido').attr('id');
		localStorage.setItem('key', keyProject);
		location.href= "proyecto.html";
	});

	$(document).on('click','.usernamePersonaSugerida',function(){
		var keyProject = $(this).closest('.sugerido').attr('id');
		localStorage.setItem('key', keyProject);
		location.href= "proyecto.html";
	});

	$(document).on('click','.nombrePersonaSugerida',function(){
		var keyProject = $(this).closest('.sugerido').attr('id');
		localStorage.setItem('key', keyProject);
		location.href= "proyecto.html";
	});

	$(document).on('click','.botonSeguirSugerido',function(){
		var keyProject = $(this).closest('.sugerido').attr('id');
		localStorage.setItem('key', keyProject);
		location.href= "proyecto.html";
	});

	$(document).on('click','.figureQuienPublica',function(){
		var keyProject = $(this).siblings('.quienYDondePublicacion').find('.dondePublica').attr('id');
		localStorage.setItem('key', keyProject);
		location.href= "proyecto.html";
	});	

	$(document).on('click','.quienPublica',function(){
		var keyProject = $(this).siblings('.dondePublica').attr('id');
		localStorage.setItem('key', keyProject);
		location.href= "proyecto.html";
	});

	$(document).on('click','.dondePublica',function(){
		var keyProject = $(this).attr('id');
		localStorage.setItem('key', keyProject);
		location.href= "proyecto.html";
	});

	$(document).on('click','.fechaPublicacion',function(){
		var keyProject = $(this).siblings('.quienYDondePublicacion').find('.dondePublica').attr('id');
		localStorage.setItem('key', keyProject);
		location.href= "proyecto.html";
	});

});




