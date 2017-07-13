function crearPublicaciones(data){

	var flexSugerencias = document.getElementById('flexSugerencias');

	//Genera todas las publicaciones
	var publicacion = document.createElement('div');
	publicacion.setAttribute('class', 'publicaciones');
	publicacion.setAttribute('id', data.key);


	//Establece el encabezado de la publicación
	var encabezadoPublicacion = document.createElement('div');
	encabezadoPublicacion.setAttribute('class', 'encabezadoPublicacion');
	publicacion.appendChild(encabezadoPublicacion);

	var figureQuienPublica = document.createElement('figure');
	figureQuienPublica.setAttribute('class', 'figureQuienPublica');
	encabezadoPublicacion.appendChild(figureQuienPublica);
	var imagenFigureQuienPublica = document.createElement('img');
	
	var referencia = firebase.database().ref('proyectos/' + data.val().projectKey + "/profilePictureURL");

	referencia.once('value').then(function(snapshot){
		
		firebase.storage().refFromURL(snapshot.val()).getDownloadURL().then(function(url) {
			imagenFigureQuienPublica.setAttribute('src', url);
			figureQuienPublica.appendChild(imagenFigureQuienPublica);
		});

	});

	var quienYDondePublicacion = document.createElement('div');
	quienYDondePublicacion.setAttribute('class', 'quienYDondePublicacion');
	encabezadoPublicacion.appendChild(quienYDondePublicacion);

	var quienPublica = document.createElement('p');
	quienPublica.setAttribute('class', 'quienPublica');

	var referenciaProyecto = firebase.database().ref('proyectos/' + data.val().projectKey + '/nombreProyecto');
	referenciaProyecto.once('value', function(snapshot){
		var textoQuienPublica = document.createTextNode(snapshot.val());
		quienPublica.appendChild(textoQuienPublica);
		quienYDondePublicacion.appendChild(quienPublica);
	});

	var dondePublica = document.createElement('p');
	dondePublica.setAttribute('id', data.val().projectKey);
	dondePublica.setAttribute('class', 'dondePublica');
	
	var referenciaDuenoProyecto = firebase.database().ref('proyectos/' + data.val().projectKey + '/duenoProyecto');

	referenciaDuenoProyecto.on('value', function(snapshot){
		var textoDondePublica = document.createTextNode(snapshot.val());
		dondePublica.appendChild(textoDondePublica);
		quienYDondePublicacion.appendChild(dondePublica);
	});

	var fechaPublicacion = document.createElement('p');
	fechaPublicacion.setAttribute('class', 'fechaPublicacion');

	//Hace la diferencia de días
	var timeFirebase = data.val().fechaHoraSubida;
	var date1 = new Date(timeFirebase);
	var date2 = new Date();
	var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	//Hace la diferencia de días

	var diferenciaDeDias; 
	if(diffDays <= 1){
		diferenciaDeDias = diffDays + " día"; 
	}else{
		diferenciaDeDias = diffDays + " días"; 
	}
	var textoFechaPublicacion = document.createTextNode(diferenciaDeDias); //Sacar texto de D.B.
	fechaPublicacion.appendChild(textoFechaPublicacion);
	encabezadoPublicacion.appendChild(fechaPublicacion);

	//Pone la foto de la publicación
	var fotoPublicacion = document.createElement('div');
	fotoPublicacion.setAttribute('class', 'fotoPublicacion');
	publicacion.appendChild(fotoPublicacion);

	var figureFotoPublicacion = document.createElement('figure');
	figureFotoPublicacion.setAttribute('class', 'figureFotoPublicacion');
	var imagenFotoPublicacion = document.createElement('img');

	firebase.storage().refFromURL(data.val().urlPost).getDownloadURL().then(function(url) {
		imagenFotoPublicacion.setAttribute('src', url);
	});

	figureFotoPublicacion.appendChild(imagenFotoPublicacion);
	fotoPublicacion.appendChild(figureFotoPublicacion);

	//Pone la cantidad de megusta
	var meGustaPublicacion = document.createElement('div');
	meGustaPublicacion.setAttribute('class', 'meGustaPublicacion');
	publicacion.appendChild(meGustaPublicacion);

	var totalDeMeGusta = document.createElement('p');
	totalDeMeGusta.setAttribute('class', 'totalDeMeGusta');
	var spanTotalDeMeGusta = document.createElement('span');

	var textoSpanTotalDeMeGusta = document.createTextNode(data.val().likes); 
	spanTotalDeMeGusta.appendChild(textoSpanTotalDeMeGusta);
	totalDeMeGusta.appendChild(spanTotalDeMeGusta);
	var textoTotalDeMeGusta = document.createTextNode(' Me gusta');
	totalDeMeGusta.appendChild(textoTotalDeMeGusta);
	meGustaPublicacion.appendChild(totalDeMeGusta);

	//Footer de publicación, para darle me gusta o comentar
	var anadirComentariosPublicacion = document.createElement('div');
	anadirComentariosPublicacion.setAttribute('class', 'anadirComentariosPublicacion');
	publicacion.appendChild(anadirComentariosPublicacion);

	firebase.database().ref('entradas/comentarios/' + data.key).on('child_added', function(snapshot){
		var comentariosPublicacion = document.createElement('p');
		comentariosPublicacion.setAttribute('class', 'comentariosPublicacion');
		var quienHizoComentario = document.createTextNode(snapshot.val().autor + " ");
		comentariosPublicacion.appendChild(quienHizoComentario);
		var spanComentariosPublicacion = document.createElement('span');
		var textoSpanComentariosPublicacion = document.createTextNode(snapshot.val().comentario);
		spanComentariosPublicacion.appendChild(textoSpanComentariosPublicacion);
		comentariosPublicacion.appendChild(spanComentariosPublicacion);
		$(comentariosPublicacion).insertBefore(anadirComentariosPublicacion)
	});


	var figureMeGusta = document.createElement('figure');
	figureMeGusta.setAttribute('class', 'figureMeGusta');
	var imagenFigureMeGusta = document.createElement('img');
	imagenFigureMeGusta.setAttribute('src', 'objetos/index/corazon.png');
	figureMeGusta.appendChild(imagenFigureMeGusta);
	anadirComentariosPublicacion.appendChild(figureMeGusta);

	var inputComentarPublicacion = document.createElement('input');
	inputComentarPublicacion.setAttribute('class', 'inputComentarPublicacion');
	inputComentarPublicacion.setAttribute('type', 'text');
	inputComentarPublicacion.setAttribute('placeholder', 'Añade un comentario...');//Puedo añadir una variable para establecer el valor de acuerdo al pais 
	anadirComentariosPublicacion.appendChild(inputComentarPublicacion);

	//Insertar todos los nodos en la página web
	$(publicacion).insertAfter(flexSugerencias);
}//Fin de la función










