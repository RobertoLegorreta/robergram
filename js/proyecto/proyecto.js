$(document).on('ready', function(){

	$(document).on('click', '#flechaDerecha img', function(){
		var keyPost = $(this).parent().parent().find('#fotoFullScreen img').attr('id');
		firebase.database().ref('entradas/' + keyPost ).once('value', function(snapshot){

			var arregloMasViejos = [];
			var keyPost = [];

			firebase.database().ref('entradas').orderByChild('projectKey').equalTo(snapshot.val().projectKey).on('child_added', function(post){
				if(snapshot.val().fechaHoraSubida < post.val().fechaHoraSubida){
					arregloMasViejos.push(post);
					keyPost.push(post.key);
				}
			});

			// console.log(arregloMasViejos);
			var postViejoMasCercano = arregloMasViejos[0];
			var keyPostMasCercano = keyPost[0];

			//Cambiar SRC Imagen
			firebase.storage().refFromURL(postViejoMasCercano.val().urlPost).getDownloadURL().then(function(url){
				$('#fotoFullScreen img').attr('src', url);
			});

			//Cambiar ID
			$('#fotoFullScreen img').attr('id', keyPostMasCercano);


			//Cambiar comentarios
			var totalComentariosFullScreen = $('#totalComentariosFullScreen');
			totalComentariosFullScreen.empty();

			firebase.database().ref('entradas/comentarios/' + keyPostMasCercano).on('child_added', function(data){
				var comentariosPublicacion = document.createElement('p');
				comentariosPublicacion.setAttribute('class', 'comentariosPublicacion');
				totalComentariosFullScreen.append(comentariosPublicacion);
				var textoComentariosPulicacion = document.createTextNode(data.val().autor);
				comentariosPublicacion.append(textoComentariosPulicacion);
				var spanComentariosPublicacion = document.createElement('span');
				comentariosPublicacion.append(spanComentariosPublicacion);
				var textoSpanComentariosPublicacion = document.createTextNode(' ' + data.val().comentario); //Sacar comentario de la D.B.
				spanComentariosPublicacion.append(textoSpanComentariosPublicacion);
			});

			//Cambiar likes
			$('#spanMeGusta').text(postViejoMasCercano.val().likes); 

			//Cambiar fecha
			//Hace la diferencia de días
			var timeFirebase = postViejoMasCercano.val().fechaHoraSubida;
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

			$('#fechaPost').text(diferenciaDeDias); 

			//Checar flechas SRC
			//CHECAR SI HAY TIMESTAMPS MÁS VIEJOS Y NUEVOS QUE EL TIMESTAMP DEL POST
			var timestampActual = postViejoMasCercano.val().fechaHoraSubida;

			$('#flechaDerecha img').removeAttr('src');
			$('#flechaIzquierda img').removeAttr('src');
			$('#flechaDerecha img').css('opacity', 0);
			$('#flechaIzquierda img').css('opacity', 0);

			firebase.database().ref('entradas').orderByChild("projectKey").equalTo(snapshot.val().projectKey).on("child_added", function(post){
				if(post.val().fechaHoraSubida != null){
					if(post.val().fechaHoraSubida > timestampActual){
						$('#flechaDerecha img').attr('src', 'objetos/proyectos/flechaDerecha.png');
						$('#flechaDerecha img').css('opacity', 1);
					}

					if(post.val().fechaHoraSubida < timestampActual){
						$('#flechaIzquierda img').attr('src', 'objetos/proyectos/flechaIzquierda.png');
						$('#flechaIzquierda img').css('opacity', 1);
					}
				}
			});

		});

		
	});//Fin de Flecha Derecha

	$(document).on('click', '#flechaIzquierda img', function(){
		var keyPost = $(this).parent().parent().find('#fotoFullScreen img').attr('id');
		firebase.database().ref('entradas/' + keyPost ).once('value', function(snapshot){

			var arregloMasViejos = [];
			var keyPost = [];

			firebase.database().ref('entradas').orderByChild('projectKey').equalTo(snapshot.val().projectKey).on('child_added', function(post){
				if(snapshot.val().fechaHoraSubida > post.val().fechaHoraSubida){
					arregloMasViejos.push(post);
					keyPost.push(post.key);
				}
			});

			// console.log(arregloMasViejos);
			var postViejoMasCercano = arregloMasViejos[arregloMasViejos.length-1];
			var keyPostMasCercano = keyPost[arregloMasViejos.length-1];

			//Cambiar SRC Imagen
			firebase.storage().refFromURL(postViejoMasCercano.val().urlPost).getDownloadURL().then(function(url){
				$('#fotoFullScreen img').attr('src', url);
			});

			//Cambiar ID
			$('#fotoFullScreen img').attr('id', keyPostMasCercano);


			//Cambiar comentarios
			var totalComentariosFullScreen = $('#totalComentariosFullScreen');
			totalComentariosFullScreen.empty();

			firebase.database().ref('entradas/comentarios/' + keyPostMasCercano).on('child_added', function(data){
				var comentariosPublicacion = document.createElement('p');
				comentariosPublicacion.setAttribute('class', 'comentariosPublicacion');
				totalComentariosFullScreen.append(comentariosPublicacion);
				var textoComentariosPulicacion = document.createTextNode(data.val().autor);
				comentariosPublicacion.append(textoComentariosPulicacion);
				var spanComentariosPublicacion = document.createElement('span');
				comentariosPublicacion.append(spanComentariosPublicacion);
				var textoSpanComentariosPublicacion = document.createTextNode(' ' + data.val().comentario); //Sacar comentario de la D.B.
				spanComentariosPublicacion.append(textoSpanComentariosPublicacion);
			});

			//Cambiar likes
			$('#spanMeGusta').text(postViejoMasCercano.val().likes); 

			//Cambiar fecha
			//Hace la diferencia de días
			var timeFirebase = postViejoMasCercano.val().fechaHoraSubida;
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

			$('#fechaPost').text(diferenciaDeDias); 

			//Checar flechas SRC
			//CHECAR SI HAY TIMESTAMPS MÁS VIEJOS Y NUEVOS QUE EL TIMESTAMP DEL POST
			var timestampActual = postViejoMasCercano.val().fechaHoraSubida;

			$('#flechaDerecha img').removeAttr('src');
			$('#flechaIzquierda img').removeAttr('src');
			$('#flechaDerecha img').css('opacity', 0);
			$('#flechaIzquierda img').css('opacity', 0);

			firebase.database().ref('entradas').orderByChild("projectKey").equalTo(snapshot.val().projectKey).on("child_added", function(post){
				if(post.val().fechaHoraSubida != null){
					if(post.val().fechaHoraSubida > timestampActual){
						$('#flechaDerecha img').attr('src', 'objetos/proyectos/flechaDerecha.png');
						$('#flechaDerecha img').css('opacity', 1);
					}

					if(post.val().fechaHoraSubida < timestampActual){
						$('#flechaIzquierda img').attr('src', 'objetos/proyectos/flechaIzquierda.png');
						$('#flechaIzquierda img').css('opacity', 1);
					}
				}
			});

		});

		
	});//Fin de Flecha Izquierda

	cargarInformacion();

	$(document).on('click', '.columna', function(){

		var keyPost = $(this).attr('id');
		
		firebase.database().ref('entradas/' + keyPost).once('value', function(data){
			generarFotoFullScreen(data);
			$('#main').css('height', 100+'vh');
			$('#main').css('overflow-y', 'hidden');
		});
	});

	$(document).on('click', '#encapsulaLogoNombre', function(){
		location.href='index.html';
	});

	$(document).on('mouseenter','.columna', function(){
		if($(this).attr('id') == 'columna3' || $(this).attr('id') == 'columna2'){
			//Do nothing
		}else{
			crearFotoCover(this);	
		}
	});

	$(document).on('mouseleave','.columna', function(){
		if($(this).attr('id') == 'columna3' || $(this).attr('id') == 'columna2'){
			//Do nothing
		}else{
			eliminarCoverFoto(this);	
		}
	});


});

