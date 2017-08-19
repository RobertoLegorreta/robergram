function generarFotoFullScreen(post){

	var centraTodo = document.createElement('div');
	centraTodo.setAttribute('id', 'centraTodo');

	var divCerrar = document.createElement('div');
	divCerrar.setAttribute('id', 'divCerrar');
	centraTodo.appendChild(divCerrar);

	var fotoYComentarios = document.createElement('div');
	fotoYComentarios.setAttribute('id', 'fotoYComentarios');
	centraTodo.appendChild(fotoYComentarios);

	var flechaIzquierda = document.createElement('div');
	flechaIzquierda.setAttribute('id', 'flechaIzquierda');
	flechaIzquierda.setAttribute('class', 'flechas');
	var imagenFlechaIzquierda = document.createElement('img');
	// imagenFlechaIzquierda.setAttribute('src', 'objetos/proyectos/flechaIzquierda.png');
	flechaIzquierda.appendChild(imagenFlechaIzquierda);
	fotoYComentarios.appendChild(flechaIzquierda);
	
	var fotoFullScreen = document.createElement('div');
	fotoFullScreen.setAttribute('id', 'fotoFullScreen');
	fotoYComentarios.appendChild(fotoFullScreen);
	var imagenFotoFullScreen = document.createElement('img');

	firebase.storage().refFromURL(post.val().urlPost).getDownloadURL().then(function(url){
		imagenFotoFullScreen.setAttribute('src', url); //Sacar imagen de D.B.
	});
	imagenFotoFullScreen.setAttribute('id', post.key); //Sacar imagen de D.B.
	fotoFullScreen.appendChild(imagenFotoFullScreen);

	var comentariosFullScreen = document.createElement('div');
	comentariosFullScreen.setAttribute('id', 'comentariosFullScreen');
	fotoYComentarios.appendChild(comentariosFullScreen);

	var encabezadoComentariosFullScreen = document.createElement('div');
	encabezadoComentariosFullScreen.setAttribute('id', 'encabezadoComentariosFullScreen');
	comentariosFullScreen.appendChild(encabezadoComentariosFullScreen);

	var fotoEncabezadoComentariosFullScreen = document.createElement('div');
	fotoEncabezadoComentariosFullScreen.setAttribute('id', 'fotoEncabezadoComentariosFullScreen');
	encabezadoComentariosFullScreen.appendChild(fotoEncabezadoComentariosFullScreen);
	var imagenFotoEncabezadoComentariosFullScreen = document.createElement('img');

	firebase.database().ref('proyectos/' + post.val().projectKey + '/profilePictureURL').once('value', function(data){
		firebase.storage().refFromURL(data.val()).getDownloadURL().then(function(url){
			imagenFotoEncabezadoComentariosFullScreen.setAttribute('src', url); //Sacar esta imagen de la D.B.
		});
	});
	fotoEncabezadoComentariosFullScreen.appendChild(imagenFotoEncabezadoComentariosFullScreen);

	var proyectoComentariosFullScreen = document.createElement('p');
	proyectoComentariosFullScreen.setAttribute('id', 'proyectoComentariosFullScreen');
	encabezadoComentariosFullScreen.appendChild(proyectoComentariosFullScreen);
	var textoProyectoComentariosFullScreen = document.createTextNode($('#nombreProyecto').text()); //Sacar texto de la D.B.
	proyectoComentariosFullScreen.appendChild(textoProyectoComentariosFullScreen);

	var totalComentariosFullScreen = document.createElement('div');
	totalComentariosFullScreen.setAttribute('id', 'totalComentariosFullScreen');
	comentariosFullScreen.appendChild(totalComentariosFullScreen);

	firebase.database().ref('entradas/comentarios/' + post.key).on('child_added', function(data){
		console.log('Todos los comentarios se cargan de forma inicial solo una vez, al generar la fotoFullScreen');
		var comentariosPublicacion = document.createElement('p');
		comentariosPublicacion.setAttribute('class', 'comentariosPublicacion');
		totalComentariosFullScreen.appendChild(comentariosPublicacion);
		var textoComentariosPulicacion = document.createTextNode(data.val().autor);
		comentariosPublicacion.appendChild(textoComentariosPulicacion);
		var spanComentariosPublicacion = document.createElement('span');
		comentariosPublicacion.appendChild(spanComentariosPublicacion);
		var textoSpanComentariosPublicacion = document.createTextNode(' ' + data.val().comentario); //Sacar comentario de la D.B.
		spanComentariosPublicacion.appendChild(textoSpanComentariosPublicacion);
	});

	var likesYDate = document.createElement('div');
	likesYDate.setAttribute('id', 'likesYDate');
	comentariosFullScreen.appendChild(likesYDate);

	var cantidadMeGusta = document.createElement('p');
	cantidadMeGusta.setAttribute('id', 'cantidadMeGusta');
	likesYDate.appendChild(cantidadMeGusta);
	
	var spanCantidadMeGusta = document.createElement('span');
	spanCantidadMeGusta.setAttribute('id', 'spanMeGusta');
	cantidadMeGusta.appendChild(spanCantidadMeGusta);
	var textoSpanCantidadMeGusta = document.createTextNode(''); 
	spanCantidadMeGusta.appendChild(textoSpanCantidadMeGusta);
	$(spanCantidadMeGusta).text(post.val().likes);
	var textoCantidadMeGusta = document.createTextNode(' likes');
	cantidadMeGusta.appendChild(textoCantidadMeGusta);

	var fechaPost = document.createElement('p');
	fechaPost.setAttribute('id', 'fechaPost');
	likesYDate.appendChild(fechaPost);

	//Hace la diferencia de días
	var timeFirebase = post.val().fechaHoraSubida;
	var date1 = new Date(timeFirebase);
	var date2 = new Date();
	var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	//Hace la diferencia de días

	var diferenciaDeDias; 
	if(diffDays <= 1){
		diferenciaDeDias = 'HACE ' + diffDays + " DÍA"; 
	}else{
		diferenciaDeDias = 'HACE ' + diffDays + " DÍAS"; 
	}

	var textoFechaPost = document.createTextNode(diferenciaDeDias); //SACAR NÚMERO DE LA D.B
	fechaPost.appendChild(textoFechaPost);

	var anadirComentariosPublicacion = document.createElement('div');
	anadirComentariosPublicacion.setAttribute('class', 'anadirComentariosPublicacion');
	comentariosFullScreen.appendChild(anadirComentariosPublicacion);

	var figureMeGusta = document.createElement('figure');
	figureMeGusta.setAttribute('class', 'figureMeGusta');
	anadirComentariosPublicacion.appendChild(figureMeGusta);
	var imagenFigureMeGusta = document.createElement('img');
	imagenFigureMeGusta.setAttribute('src', 'objetos/index/corazon.png');
	figureMeGusta.appendChild(imagenFigureMeGusta);

	var inputComentarPublicacion = document.createElement('input');
	inputComentarPublicacion.setAttribute('class', 'inputComentarPublicacion');
	inputComentarPublicacion.setAttribute('type', 'text');
	inputComentarPublicacion.setAttribute('placeholder', 'Añade un comentario...');
	anadirComentariosPublicacion.appendChild(inputComentarPublicacion);

	var flechaDerecha = document.createElement('div');
	flechaDerecha.setAttribute('id', 'flechaDerecha');
	flechaDerecha.setAttribute('class', 'flechas');
	var imagenFlechaDerecha = document.createElement('img');
	// imagenFlechaDerecha.setAttribute('src', 'objetos/proyectos/flechaDerecha.png');
	flechaDerecha.appendChild(imagenFlechaDerecha);
	fotoYComentarios.appendChild(flechaDerecha);

	//CHECAR SI HAY TIMESTAMPS MÁS VIEJOS Y NUEVOS QUE EL TIMESTAMP DEL POST
	var timestampActual = post.val().fechaHoraSubida;


	firebase.database().ref('entradas').orderByChild("projectKey").equalTo(post.val().projectKey).on("child_added", function(snapshot){
		if(snapshot.val().fechaHoraSubida != null){
			if(snapshot.val().fechaHoraSubida > timestampActual){
				imagenFlechaDerecha.setAttribute('src', 'objetos/proyectos/flechaDerecha.png');
			}

			if(snapshot.val().fechaHoraSubida < timestampActual){
				imagenFlechaIzquierda.setAttribute('src', 'objetos/proyectos/flechaIzquierda.png');
			}
		}
	});

	$('body').prepend(centraTodo);

	cambioAColumna();
}








