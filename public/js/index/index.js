$(document).on('ready',function(){

	// Nuevas publicaciones
	firebase.database().ref('entradas').on('child_added', function(snapshot){
		crearPublicaciones(snapshot);
	});

	proyectosDesarrollados();
	
});

