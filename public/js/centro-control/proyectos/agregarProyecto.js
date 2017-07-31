$(document).on('ready', function(){
	$(document).on('change', '#subirFoto input', function(){
		var input = $('#subirFoto input');

		var reader = new FileReader();
        reader.onload = function (e) {
            $('#subirFoto img').attr('src', e.target.result);
            $('#camara').removeClass('camara');
			$('#camara').addClass('fotoSubidaInput');
        }
        reader.readAsDataURL(input[0].files[0]);
	});

	$(document).on('click', '#pantallaAgregarProyecto', function(){
		$('#pantallaAgregarProyecto').remove();
	});

	$(document).on('click', '#centraContenidoAgregarProyecto', function(event){
		event.stopPropagation();
	});

	$(document).on('click', '#enviar', function(){
		enviarInformacion();
	});
});

function subirProyecto(){
	var pantallaAgregarProyecto = document.createElement('div');
	pantallaAgregarProyecto.setAttribute('id', 'pantallaAgregarProyecto');

	var centraContenidoAgregarProyecto = document.createElement('div');
	centraContenidoAgregarProyecto.setAttribute('id', 'centraContenidoAgregarProyecto');
	pantallaAgregarProyecto.appendChild(centraContenidoAgregarProyecto);

	var subirFoto = document.createElement('figure');
	subirFoto.setAttribute('id', 'subirFoto');
	var imagenSubirFoto = document.createElement('img');
	imagenSubirFoto.setAttribute('id', 'camara');
	imagenSubirFoto.setAttribute('class', 'camara');
	imagenSubirFoto.setAttribute('src', '../objetos/centro-control/camara.svg');
	subirFoto.appendChild(imagenSubirFoto);
	var inputFoto = document.createElement('input');
	inputFoto.setAttribute('type', 'file');
	subirFoto.appendChild(inputFoto);
	centraContenidoAgregarProyecto.appendChild(subirFoto);

	var inputNombre = document.createElement('input');
	inputNombre.setAttribute('id', 'nombre');
	inputNombre.setAttribute('type', 'text');
	inputNombre.setAttribute('placeholder', 'Nombre');
	centraContenidoAgregarProyecto.appendChild(inputNombre);

	var inputDueno = document.createElement('input');
	inputDueno.setAttribute('id', 'dueno');
	inputDueno.setAttribute('type', 'text');
	inputDueno.setAttribute('placeholder', 'Dueño');
	centraContenidoAgregarProyecto.appendChild(inputDueno);

	var inputWeb = document.createElement('input');
	inputWeb.setAttribute('id', 'web');
	inputWeb.setAttribute('type', 'text');
	inputWeb.setAttribute('placeholder', 'Página web');
	centraContenidoAgregarProyecto.appendChild(inputWeb);

	var textarea = document.createElement('textarea');
	textarea.setAttribute('id', 'descripcion');
	textarea.setAttribute('placeholder', 'Descripción');
	centraContenidoAgregarProyecto.appendChild(textarea);

	var enviar = document.createElement('input');
	enviar.setAttribute('id', 'enviar');
	enviar.setAttribute('type', 'submit');
	enviar.setAttribute('value', 'REGISTRAR PROYECTO');
	centraContenidoAgregarProyecto.appendChild(enviar);

	$('body').prepend(pantallaAgregarProyecto);

	centrar();
}