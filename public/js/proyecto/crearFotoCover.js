function crearFotoCover(columna){

	var keyPost = $(columna).attr('id');

	var coverFoto = document.createElement('div');
	coverFoto.setAttribute('id', 'coverFoto');
	columna.appendChild(coverFoto);

	//Crea imagen de corazón y cantidad de me gusta
	var meGustaCantidad = document.createElement('div');
	meGustaCantidad.setAttribute('class', 'meGustaCantidad');
	coverFoto.appendChild(meGustaCantidad);

	var figureCoverFoto = document.createElement('figure');
	figureCoverFoto.setAttribute('class', 'figureCoverFoto');
	meGustaCantidad.appendChild(figureCoverFoto);
	var imagenFigureCoverFoto = document.createElement('img');
	imagenFigureCoverFoto.setAttribute('src', 'objetos/proyectos/meGusta.png');
	figureCoverFoto.appendChild(imagenFigureCoverFoto);

	var cantidadCoverFoto = document.createElement('p');
	cantidadCoverFoto.setAttribute('class', 'cantidadCoverFoto');
	meGustaCantidad.appendChild(cantidadCoverFoto);

	firebase.database().ref('entradas/' + keyPost + '/likes').once('value', function(snapshot){
		var textoCantidadCoverFoto = document.createTextNode(snapshot.val());
		cantidadCoverFoto.appendChild(textoCantidadCoverFoto);
	});

	//Crea imagen de dialogo y cantidad de comentarios
	var comentariosCantidad = document.createElement('div');
	comentariosCantidad.setAttribute('class', 'comentariosCantidad');
	coverFoto.appendChild(comentariosCantidad);

	var figureCoverFoto = document.createElement('figure');
	figureCoverFoto.setAttribute('class', 'figureCoverFoto');
	comentariosCantidad.appendChild(figureCoverFoto);
	var imagenFigureCoverFoto = document.createElement('img');
	imagenFigureCoverFoto.setAttribute('src', 'objetos/proyectos/comentarios.png');
	figureCoverFoto.appendChild(imagenFigureCoverFoto);

	var cantidadCoverFoto = document.createElement('p');
	cantidadCoverFoto.setAttribute('class', 'cantidadCoverFoto');
	comentariosCantidad.appendChild(cantidadCoverFoto);
	firebase.database().ref('entradas/' + keyPost + '/cantidadComentarios').once('value', function(snapshot){
		var cantComentariosBD = snapshot.val();
		if(snapshot.val() == null){
			cantComentariosBD = 0;
		}

		var textoCantidadCoverFoto = document.createTextNode(cantComentariosBD); //Este valor sale de D.B.
		cantidadCoverFoto.appendChild(textoCantidadCoverFoto);
	});
}

function eliminarCoverFoto(columna){
	$(columna).children('#coverFoto').remove();
}


