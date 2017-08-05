$(document).on('ready', function(){
	firebase.database().ref('proyectos').on('child_added', function(data){
		mostrarProyecto(data);
	});
});

function mostrarProyecto(data){
	var proyecto = document.createElement('div');
	proyecto.setAttribute('id', data.key);
	proyecto.setAttribute('class', 'proyecto proyectoDB');
	$('#centrarProyectos').append(proyecto);

	var figureProyecto = document.createElement('figure');
	figureProyecto.setAttribute('class', 'imagenProyecto');
	proyecto.appendChild(figureProyecto);
	var imagenProyecto = document.createElement('img');
	imagenProyecto.setAttribute('src', data.val().profilePictureURL);
	figureProyecto.appendChild(imagenProyecto);

	var nombreProyecto = document.createElement('p');
	nombreProyecto.setAttribute('class', 'nombreProyecto');
	proyecto.appendChild(nombreProyecto);
	var textoNombreProyecto = document.createTextNode(data.val().nombreProyecto);
	nombreProyecto.appendChild(textoNombreProyecto);
}


