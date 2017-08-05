var cantidadEntradas = 0;

$(document).on('ready', function(){

	firebase.database().ref('entradas').on('child_added', function(entrada){
		if(entrada.key != 'comentarios'){
			localStorage.setItem('cantidad', cantidadEntradas++);
			generarEntrada(entrada.val(), entrada.key);
		}
	});

	$(document).on('click', '#entradaDB', function(evento){
		evento.stopPropagation();
	});
});

function generarEntrada(post, key){
	var entrada = document.createElement('div');
	entrada.setAttribute('id', key);
	entrada.setAttribute('class', 'entradaDB');
	if(localStorage.getItem('cantidad') % 2 == 0){
		$('#columnaDerecha').append(entrada);
	}else{
		$('#columnaIzquierda').append(entrada);
	}

	var eliminarEntrada = document.createElement('figure');
	eliminarEntrada.setAttribute('class', 'eliminarEntrada');
	entrada.appendChild(eliminarEntrada);

	var imagenEliminar = document.createElement('img');
	imagenEliminar.setAttribute('src', '../objetos/centro-control/eliminar.svg');
	eliminarEntrada.appendChild(imagenEliminar);

	var editarEntrada = document.createElement('figure');
	editarEntrada.setAttribute('class', 'editarEntrada');
	entrada.appendChild(editarEntrada);

	var imagenEditar = document.createElement('img');
	imagenEditar.setAttribute('src', '../objetos/centro-control/editar.svg');
	editarEntrada.appendChild(imagenEditar);

	var fotoEntrada = document.createElement('figure');
	fotoEntrada.setAttribute('class', 'fotoEntrada');
	entrada.appendChild(fotoEntrada);

	var imagenFotoEntrada = document.createElement('img');
	imagenFotoEntrada.setAttribute('src', post.urlPost);
	fotoEntrada.appendChild(imagenFotoEntrada);

	var pre = document.createElement('pre');
	pre.setAttribute('id', post.miComentario);
	pre.setAttribute('class', 'primerComentario');

	firebase.database().ref('entradas/comentarios/' + key + '/' + post.miComentario + '/comentario').once('value', function(comentario){
		var textoPre = document.createTextNode(comentario.val());
		pre.appendChild(textoPre);
	});
	entrada.appendChild(pre);
}




