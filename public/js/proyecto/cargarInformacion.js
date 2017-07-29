function cargarInformacion(){
	
	var keyProyecto = localStorage.getItem('key');

	//Get image
	var imagen = $('#figureFotoProyecto img');

	firebase.database().ref('proyectos/' + keyProyecto).once('value', function(snapshot){
		$('#nombreProyecto').text(snapshot.val().nombreProyecto);
		$('#webProyecto').text(snapshot.val().websiteProyecto);
		$('#duenoProyecto').text(snapshot.val().duenoProyecto);
		$('#descripcionProyecto').text(snapshot.val().descripcionProyecto);
		$('#descripcionProyectoFuera').text(snapshot.val().descripcionProyecto);

		firebase.storage().refFromURL(snapshot.val().profilePictureURL).getDownloadURL().then(function(url){
			imagen.attr('src', url);
		});
	});


	//Imágenes
	// firebase.database().ref('entradas').on('child_added', function(snapshot){

	// });

	var ref = firebase.database().ref("entradas");

	var contador = 0;
	var resultado = 0;


	ref.orderByChild("projectKey").equalTo(keyProyecto).on("child_added", function(snapshot) {

	  	contador = contador + 1; 
	  	localStorage.setItem('contador', contador);

	  	var fotosProyecto = $('#fotosProyecto');

	  	resultado = contador % 3;

	  	var id = '#' + Math.ceil(contador/3);

	  	if(resultado == 1){
	  		var rowsFotos = document.createElement('div');
			rowsFotos.setAttribute('class', 'rowsFotos');
			rowsFotos.setAttribute('id', Math.ceil(contador/3));
			fotosProyecto.append(rowsFotos);

			for(var i = 0; i<=2; i++){
				var columna = document.createElement('div');
				if(i == 0){
					columna.setAttribute('id', snapshot.key);
				}else{
					columna.setAttribute('id', 'columna' + (i + 1));
				}
				columna.setAttribute('class', 'columna');

				$(id).append(columna);	

			}//Fin del for
	  	}//Fin del if	  

	 	if(resultado == 2){
			$('#columna2').addClass('columnaCentrada');
			$('#columna2').attr('id', snapshot.key);
		}

		if(resultado == 0){
			$('#columna3').attr('id', snapshot.key);
		}

		// Solo va a funcionar para la primera columna
		if(resultado == 1){
			var imagenColumna = document.createElement('img');
			$('#' + snapshot.key).append(imagenColumna);
			firebase.storage().refFromURL(snapshot.val().urlPost).getDownloadURL().then(function(url){
				imagenColumna.setAttribute('src', url);
				$('.columna').css('height', $('.columna').css('width'));
			});
		}else{
			//Segunda y tercera columna
			var imagenColumna = document.createElement('img');
			$('#' + snapshot.key).append(imagenColumna);
			firebase.storage().refFromURL(snapshot.val().urlPost).getDownloadURL().then(function(url){
				imagenColumna.setAttribute('src', url);
				$('.columna').css('height', $('.columna').css('width'));
			});
		}
		

		



	});//Fin de orderByChild

}