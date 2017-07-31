$(document).on('ready', function(){
	centrar();

	determinarLogeado();

	$(document).on('click', '#sign', function(){
	 	ingresar();
	});

	$(document).on('keyup', function(evento){
		if(evento.keyCode == 13){
			ingresar();
	    }
	});
});