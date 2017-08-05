$(document).on('click', '#enviar', function(){
	subirEntrada();
});

function subirEntrada(){

    var comentarioDelInput = $('#primerComentario').val();
    var keyProyecto = localStorage.getItem('proyectoSeleccionado');

	var newProjectKey = firebase.database().ref().child('entradas/').push().key;

	var miComentario = {
		fechaHoraSubida: firebase.database.ServerValue.TIMESTAMP,
		autor: 'Roberto Legorreta', 
		comentario: comentarioDelInput
	}

	var keyComentario = firebase.database().ref('entradas/comentarios/' + newProjectKey).push().key;

	var post = {
	    likes: 0,
	    fechaHoraSubida: firebase.database.ServerValue.TIMESTAMP,
	    projectKey: keyProyecto,
	    cantidadComentarios: 1, 
	    miComentario: keyComentario
	 };

	var updates = {};
  	updates['/entradas/comentarios/' + newProjectKey + '/' + keyComentario] = miComentario;
  	updates['/entradas/' + newProjectKey] = post;

  	firebase.database().ref().update(updates, function(error){
  		if(error){
  			alert('No se pudo guardar la información');
  		}else{
  			console.log('Post subido con éxito');
			var inputElement = document.getElementById('file');
			var file = inputElement.files;

			//Crear referencia al storage de fotoPerfilProyecto
			var fotoProyectoRef = firebase.storage().ref().child('entradas/' + newProjectKey + '/' + file[0].name);

			var uploadTask = fotoProyectoRef.put(file[0]);

			//Observamos la subida
			uploadTask.on('state_changed', function(snapshot){
			  // Observe state change events such as progress, pause, and resume
			  // See below for more detail
			}, function(error) {
				console.log(error);
			}, function() {
				console.log('Imagen subida con éxito');
				var downloadURL = uploadTask.snapshot.downloadURL;

				firebase.database().ref().child('entradas/' + newProjectKey).update({
					urlPost: downloadURL
				});
			});//Fin de escuchar los cambios de subida de imagen
  		}
  	});

    // You must return false to prevent the default form behavior
    return false;	
}