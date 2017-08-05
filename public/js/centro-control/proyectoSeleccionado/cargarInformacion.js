$(document).on('ready', function(){

	var id = localStorage.getItem('proyectoSeleccionado');

	firebase.database().ref('proyectos/' + id).once('value', function(data){
		$('#fotoProyecto img').attr('src', data.val().profilePictureURL);
		$('#nombreProyecto').text(data.val().nombreProyecto);
		$('#webProyecto').text(data.val().websiteProyecto);
		$('#duenoProyecto').text(data.val().duenoProyecto);
		$('#descripcionProyecto').text(data.val().descripcionProyecto);
	});
});