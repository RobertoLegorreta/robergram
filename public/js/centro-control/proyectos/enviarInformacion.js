function enviarInformacion(){

	var nombreIngresado = $('#nombre').val();
	var duenoIngresado = $('#dueno').val();
	var webIngresado = $('#web').val();
	var descripcionIngresado = $('#descripcion').val();

	var newProjectKey = firebase.database().ref().child('proyectos').push().key;

	var project = {
	    nombreProyecto: nombreIngresado,
	    duenoProyecto: duenoIngresado,
	    websiteProyecto : webIngresado,
	    descripcionProyecto : descripcionIngresado,
	    cantidadComentarios: 0
	 };

	firebase.database().ref().child('proyectos/' + newProjectKey).update(project, function(error){
		if(error){
			alert('No se pudo guardar la información' + error);
		}else{
			var input = $('#subirFoto input');
			var file = input[0].files[0];

			//Crear referencia al storage de fotoPerfilProyecto
			var fotoProyectoRef = firebase.storage().ref().child('profilePictures/' + newProjectKey + '/' + file.name);

			var uploadTask = fotoProyectoRef.put(file);

			//Observamos la subida
			uploadTask.on('state_changed', function(snapshot){
			  // Observe state change events such as progress, pause, and resume
			  // See below for more detail
			}, function(error) {
				console.log(error);
			}, function() {
				var downloadURL = uploadTask.snapshot.downloadURL;

				firebase.database().ref().child('proyectos/' + newProjectKey).update({
					profilePictureURL: downloadURL
				});

				alert('Toda la información ha sido subida con éxito');
			});//Fin de escuchar los cambios de subida de imagen

		}//Fin del else
	});

}