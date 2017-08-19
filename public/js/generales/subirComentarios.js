$(document).on('ready', function(){

	$(document).on('keyup', '.inputComentarPublicacion', function(e){
		//Determina postKey
		if($('#fotoFullScreen').length){
			var postKey = $('#fotoFullScreen img').attr('id');
		}else{
			var postKey = $(this).parent().parent().attr('id');
		}

		var code = e.keyCode || e.which;

		//Agarramos el enter
		if(code == 13) { 
			var comentario = {
				autor: null, 
				comentario: $(this).val(),
				fechaHoraSubida: firebase.database.ServerValue.TIMESTAMP
			}

			firebase.database().ref('entradas/comentarios/' + postKey).push(comentario, function(error){
				if(error){
					console.log('Falló la subida del comentario');
				}else{
					console.log('Comentario subido con éxito');
				}
			});
			
			$(this).val('');
		}
	});

});
