$(document).on('ready',function(){

	$(document).on('keyup', '.inputComentarPublicacion', function(e){
		
		if($('#fotoFullScreen').length){
			var postKey = $('#fotoFullScreen img').attr('id');
		}else{
			var postKey = $(this).parent().parent().attr('id');
		}

		var code = e.keyCode || e.which;

		if(code == 13) { //Enter keycode

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

			firebase.database().ref('entradas/' + postKey + '/cantidadComentarios').once('value', function(snapshot){

				var cantComentarios = snapshot.val(); 

				if(cantComentarios == null){
					cantComentarios = 1;
				}else{
					cantComentarios++
				}

				var comentarios = {
					cantidadComentarios: cantComentarios
				}

				firebase.database().ref('entradas/' + postKey).update(comentarios, function(error){
				if(error){
					console.log('Falló la subida del comentario');
				}else{
					console.log('Comentario subido con éxito');
				}
			});

			});

			$(this).val('');
		}
	});

});


