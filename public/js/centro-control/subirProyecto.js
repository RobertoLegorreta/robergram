$(document).on('ready',function(){

	//EVENT LISTENER CUANDO SE HACE CLICK EN EL BOTÓN SUBMIT
	// var form = document.getElementById('subirProyecto');
	// if (form.attachEvent) {
	//     form.attachEvent("submit", processForm);
	// } else {
	//     form.addEventListener("submit", processForm);
	// }

	//EVENT LISTENER CUANDO SE HACE CLICK EN EL BOTÓN SUBMIT
	var formPost = document.getElementById('subirPost');
	if (formPost.attachEvent) {
	    formPost.attachEvent("submit", subirPost);
	} else {
	    formPost.addEventListener("submit", subirPost);
	}

	var dato = firebase.database().ref('proyectos').on('child_added', function(data){
	
		var p = document.createElement('p');
		p.setAttribute('id', data.key);
		p.setAttribute('class', 'proyectos');
		var textoP = document.createTextNode(data.val().nombreProyecto);
		p.appendChild(textoP);
		$(p).insertBefore($('#subirPost'));
		$(p).on('click', function(){
			$('p').removeClass('seleccionado');
			$(this).addClass('seleccionado');
		})

	});	

});

function subirPost(e) {
    if (e.preventDefault) e.preventDefault();


    //Jalar valores de formulario
    var comentarioDelInput = $('#primerComentario').val();
    var keyProyecto = $('.seleccionado').attr('id');

	var newProjectKey = firebase.database().ref().child('entradas/').push().key;

	var post = {
	    likes: 0,
	    fechaHoraSubida: firebase.database.ServerValue.TIMESTAMP,
	    projectKey: keyProyecto,
	    cantidadComentarios: 1
	 };

	var miComentario = {
		fechaHoraSubida: firebase.database.ServerValue.TIMESTAMP,
		autor: 'Roberto Legorreta', 
		comentario: comentarioDelInput
	}

	//Subir comentarios
	firebase.database().ref().child('entradas/comentarios/' + newProjectKey).push(miComentario, function(error){
		if(error){
			console.log('Problema al subir el comentario');
		}else{
			console.log('Comentario subido con éxito');
		}
	});

	//Subir cantidad de likes, fecha de subida y Key del proyecto
	firebase.database().ref().child('entradas/' + newProjectKey).update(post, function(error){
		if(error){
			console.log('No se pudo guardar la información' + error);
		}else{
			console.log('Awebooo, subimos EL POST');

			var inputElement = document.getElementById('fotoPost');
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
				console.log('AWEBOOO SE SUBIÓ LA IMAGEN');
				var downloadURL = uploadTask.snapshot.downloadURL;

				firebase.database().ref().child('entradas/' + newProjectKey).update({
					urlPost: downloadURL
				});
			});//Fin de escuchar los cambios de subida de imagen

		}//Fin del else
	});

    // You must return false to prevent the default form behavior
    return false;
}
	







// function processForm(e) {
//     if (e.preventDefault) e.preventDefault();


//     //Jalar valores de formulario
//     var nomProyecto = $('#nombreProyecto').val();
//     var dueProyecto = $('#duenoProyecto').val();
//     var webProyecto = $('#websiteProyecto').val();
//     var desProyecto = $('#descripcionProyecto').val();

// 	var newProjectKey = firebase.database().ref().child('proyectos').push().key;

// 	var project = {
// 	    nombreProyecto: nomProyecto,
// 	    duenoProyecto: dueProyecto,
// 	    websiteProyecto : webProyecto,
// 	    descripcionProyecto : desProyecto,
// 	    cantidadComentarios: 0
// 	 };

// 	firebase.database().ref().child('proyectos/' + newProjectKey).update(project, function(error){
// 		if(error){
// 			console.log('No se pudo guardar la información' + error);
// 		}else{
// 			console.log('Awebooo, lo subimos');

// 			var inputElement = document.getElementById('fotoProyecto');
// 			var file = inputElement.files;

// 			//Crear referencia al storage de fotoPerfilProyecto
// 			var fotoProyectoRef = firebase.storage().ref().child('profilePictures/' + newProjectKey + '/' + file[0].name);

// 			var uploadTask = fotoProyectoRef.put(file[0]);

// 			//Observamos la subida
// 			uploadTask.on('state_changed', function(snapshot){
// 			  // Observe state change events such as progress, pause, and resume
// 			  // See below for more detail
// 			}, function(error) {
// 				console.log(error);
// 			}, function() {
// 				console.log('AWEBOOO SE SUBIÓ LA IMAGEN');
// 				var downloadURL = uploadTask.snapshot.downloadURL;

// 				firebase.database().ref().child('proyectos/' + newProjectKey).update({
// 					profilePictureURL: downloadURL
// 				});
// 			});//Fin de escuchar los cambios de subida de imagen

// 		}//Fin del else
// 	});

//     // You must return false to prevent the default form behavior
//     return false;
// }











