$(document).on('ready', function(){
	$(document).on('mouseenter', '.entradaDB', function(){
		$(this).find('.editarEntrada').css('display', 'block');
		$(this).find('.eliminarEntrada').css('display', 'block');
	});

	$(document).on('mouseleave', '.entradaDB', function(){
		$(this).find('.editarEntrada').css('display', 'none');
		$(this).find('.eliminarEntrada').css('display', 'none');
	});

	$(document).on('click', '.editarEntrada', function(){
		var idEntrada = $(this).parent().attr('id');
		editarEntrada(idEntrada, this);
	});

	$(document).on('click', '#modificarEntrada', function(){
		modificarEntrada();
	});

	$(document).on('click', '.eliminarEntrada', function(){
		var idEntrada = $(this).parent().attr('id');
		eliminarEntrada(idEntrada, $(this));
	});
});

function editarEntrada(idEntrada, botonEditar){

	var pantallaAgregarEntrada = document.createElement('div');
	pantallaAgregarEntrada.setAttribute('id', 'pantallaAgregarEntrada');
	$('body').prepend(pantallaAgregarEntrada);

	var centraContenidoAgregarEntrada = document.createElement('div');
	centraContenidoAgregarEntrada.setAttribute('id', 'centraContenidoAgregarEntrada');
	centraContenidoAgregarEntrada.setAttribute('keyentrada', idEntrada);
	pantallaAgregarEntrada.appendChild(centraContenidoAgregarEntrada);

	var subirFoto = document.createElement('figure');
	subirFoto.setAttribute('id', 'subirFoto');
	centraContenidoAgregarEntrada.appendChild(subirFoto);

	var imagenSubirFoto = document.createElement('img');
	imagenSubirFoto.setAttribute('class', 'fotoSubidaInput');
	imagenSubirFoto.setAttribute('src', $(botonEditar).siblings('.fotoEntrada').children('img').attr('src'));
	subirFoto.appendChild(imagenSubirFoto);

	var inputSubirFoto = document.createElement('input');
	inputSubirFoto.setAttribute('id', 'file');
	inputSubirFoto.setAttribute('type', 'file');
	inputSubirFoto.setAttribute('name', 'file');
	subirFoto.appendChild(inputSubirFoto);

	var labelSubirFoto = document.createElement('label');
	labelSubirFoto.setAttribute('id', 'label');
	labelSubirFoto.setAttribute('for', 'file');
	subirFoto.appendChild(labelSubirFoto);

	var textarea = document.createElement('textarea');
	textarea.setAttribute('id', 'primerComentario');
	textarea.setAttribute('keycomentario', $(botonEditar).siblings('.primerComentario').attr('id'));
	$(textarea).text($(botonEditar).siblings('.primerComentario').text());
	centraContenidoAgregarEntrada.appendChild(textarea);

	var inputEnviar = document.createElement('input');
	inputEnviar.setAttribute('id', 'modificarEntrada');
	inputEnviar.setAttribute('type', 'submit');
	inputEnviar.setAttribute('value', 'MODIFICAR ENTRADA');
	centraContenidoAgregarEntrada.appendChild(inputEnviar);

	centrar();
}

function modificarEntrada(){
    var keyProyecto = localStorage.getItem('proyectoSeleccionado');
    var keyEntrada = $('#centraContenidoAgregarEntrada').attr('keyentrada');
    var keyComentario = $('#primerComentario').attr('keycomentario');
    var comentario = $('#primerComentario').val();
    var foto = $('#file');
    var file = foto[0].files;

    //Modificamos el comentario
    firebase.database().ref('entradas/comentarios/' + keyEntrada + '/' + keyComentario + '/comentario').set(comentario);

    //Modificamos la foto
	// var referencia = firebase.storage().ref('entradas/' + keyEntrada);

	firebase.database().ref('entradas/' + keyEntrada + '/urlPost').once('value', function(url){
		modificarFoto(url.val());
	});

	function modificarFoto(url){
		var referencia = firebase.storage().refFromURL(url);

		referencia.delete().then(function() {
	  	var nuevaReferencia = firebase.storage().ref('entradas/' + keyEntrada + '/' + file[0].name);

	  	var uploadTask = nuevaReferencia.put(file[0]);

		//Observamos la subida
		uploadTask.on('state_changed', function(snapshot){
		}, function(error) {
			console.log(error);
		}, function() {
			var downloadURL = uploadTask.snapshot.downloadURL;

			firebase.database().ref().child('entradas/' + keyEntrada).update({
				urlPost: downloadURL
			});
		});//Fin de escuchar los cambios de subida de imagen

		}).catch(function(error) {
		  	// Uh-oh, an error occurred!
		});
	}
    // You must return false to prevent the default form behavior
    return false;	
}


function eliminarEntrada(idEntrada, botonEliminar){
	firebase.database().ref('entradas/' + idEntrada + '/urlPost').once('value', function(url){
		var referencia = firebase.storage().refFromURL(url.val());

		referencia.delete().then(function() {
			firebase.database().ref('entradas/comentarios/' + idEntrada).set(null);	
			firebase.database().ref('entradas/' + idEntrada).set(null);	
		}).catch(function(error) {
		  	// Uh-oh, an error occurred!
		});
	});
}

