function proyectosDesarrollados(){

	var principal = $('#principal'); 

	var flexSugerencias = document.createElement('div');
	flexSugerencias.setAttribute('id', 'flexSugerencias');
	$(principal).append(flexSugerencias);

	var encabezadoSugerencias = document.createElement('div');
	encabezadoSugerencias.setAttribute('id', 'encabezadoSugerencias');
	flexSugerencias.appendChild(encabezadoSugerencias);

	var tituloSugerencias = document.createElement('p');
	tituloSugerencias.setAttribute('id', 'tituloSugerencias');
	encabezadoSugerencias.appendChild(tituloSugerencias);

	var textoTituloSugerencias = document.createTextNode('PROYECTOS DESARROLLADOS');
	tituloSugerencias.appendChild(textoTituloSugerencias);


	firebase.database().ref('proyectos').on('child_added', function(data){
		var sugerido = document.createElement('div');
		sugerido.setAttribute('id', data.key);
		sugerido.setAttribute('class', 'sugerido');
		flexSugerencias.appendChild(sugerido);
		
		var alinearIzquierdaSugerido = document.createElement('div');
		alinearIzquierdaSugerido.setAttribute('class', 'alinearIzquierdaSugerido');
		sugerido.appendChild(alinearIzquierdaSugerido);

		var personaSugeridaFigure = document.createElement('figure');
		personaSugeridaFigure.setAttribute('class', 'personaSugeridaFigure');
		alinearIzquierdaSugerido.appendChild(personaSugeridaFigure);

		var imagenPersonaSugeridaFigure = document.createElement('img');

		var referenciaStorage = firebase.database().ref('proyectos/' + data.key + "/profilePictureURL");

		referenciaStorage.once('value').then(function(snapshot){
			if(snapshot.val() != null){
				firebase.storage().refFromURL(snapshot.val()).getDownloadURL().then(function(url) {
					imagenPersonaSugeridaFigure.setAttribute('src', url);
				});
			}
		});

		personaSugeridaFigure.appendChild(imagenPersonaSugeridaFigure);

		var personaSugerida = document.createElement('div');
		personaSugerida.setAttribute('class', 'personaSugerida');
		alinearIzquierdaSugerido.appendChild(personaSugerida);

		var usernamePersonaSugerida = document.createElement('p');
		usernamePersonaSugerida.setAttribute('class', 'usernamePersonaSugerida');
		personaSugerida.appendChild(usernamePersonaSugerida);

		var textoUsernamePersonaSugerida = document.createTextNode(data.val().nombreProyecto);
		usernamePersonaSugerida.appendChild(textoUsernamePersonaSugerida);

		var nombrePersonaSugerida = document.createElement('p');
		nombrePersonaSugerida.setAttribute('class', 'nombrePersonaSugerida');
		personaSugerida.appendChild(nombrePersonaSugerida);

		var textoNombrePersonaSugerida = document.createTextNode(data.val().duenoProyecto);
		nombrePersonaSugerida.appendChild(textoNombrePersonaSugerida);

		var botonSeguirSugerido = document.createElement('p');
		botonSeguirSugerido.setAttribute('class', 'botonSeguirSugerido');
		sugerido.appendChild(botonSeguirSugerido);

		var textoBotonSeguirSugerido = document.createTextNode('Ver proyecto');
		botonSeguirSugerido.appendChild(textoBotonSeguirSugerido);
	});
}











