function cerrarSesion(){
	firebase.auth().signOut().then(function() {
	 	location.href = 'index.html';
	}, function(error) {
	  	alert('Ha ocurrido un error, no se ha podido cerrar la sesión');
	});
}