$(document).on('ready', function(){
	$(document).on('click', '.entrada', function(){
		agregarEntrada();
	});

	$(document).on('click', '#pantallaAgregarEntrada', function(){
		$('#pantallaAgregarEntrada').remove();
	});

	$(document).on('click', '#centraContenidoAgregarEntrada', function(evento){
		evento.stopPropagation();
	});

	$(document).on('change', '#file', function(){
		var input = $('#file');

		var reader = new FileReader();
        reader.onload = function (e) {
            $('#subirFoto img').attr('src', e.target.result);
            $('#camara').removeClass('camara');
			$('#camara').addClass('fotoSubidaInput');
        }
        reader.readAsDataURL(input[0].files[0]);
	});
});

function agregarEntrada(){
	var pantallaAgregarEntrada = document.createElement('div');
	pantallaAgregarEntrada.setAttribute('id', 'pantallaAgregarEntrada');
	$('body').prepend(pantallaAgregarEntrada);

	var centraContenidoAgregarEntrada = document.createElement('div');
	centraContenidoAgregarEntrada.setAttribute('id', 'centraContenidoAgregarEntrada');
	pantallaAgregarEntrada.appendChild(centraContenidoAgregarEntrada);

	var subirFoto = document.createElement('figure');
	subirFoto.setAttribute('id', 'subirFoto');
	centraContenidoAgregarEntrada.appendChild(subirFoto);

	var imagenSubirFoto = document.createElement('img');
	imagenSubirFoto.setAttribute('id', 'camara');
	imagenSubirFoto.setAttribute('class', 'camara');
	imagenSubirFoto.setAttribute('src', '../objetos/centro-control/camara.svg');
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
	textarea.setAttribute('placeholder', 'Primer comentario');
	centraContenidoAgregarEntrada.appendChild(textarea);

	var inputEnviar = document.createElement('input');
	inputEnviar.setAttribute('id', 'enviar');
	inputEnviar.setAttribute('type', 'submit');
	inputEnviar.setAttribute('value', 'SUBIR ENTRADA');
	centraContenidoAgregarEntrada.appendChild(inputEnviar);

	centrar();
}



