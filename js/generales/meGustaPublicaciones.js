$(document).on('ready',function(){

	$(document).on('click', '.figureMeGusta', function(){

		var postKey; 

		if($('#fotoFullScreen').length){
			var postKey = $('#fotoFullScreen img').attr('id');
		}else{
			var postKey = $(this).parent().parent().attr('id');
		}

		var referencia = firebase.database().ref('entradas/' + postKey + '/likes');

		referencia.once('value', function(snapshot){
			var cantidadLikes = snapshot.val();
			cantidadLikes++;

			firebase.database().ref('entradas/' + postKey).update({
			    likes: cantidadLikes
			});

		});


		var idPost = "#" + postKey;

		if(!$('#fotoFullScreen').length){
			firebase.database().ref('entradas/' + postKey + '/likes').once('value', function(snapshot){
				$(idPost).find('.meGustaPublicacion span').text(snapshot.val());
			});
		}else{
			firebase.database().ref('entradas/' + postKey + '/likes').once('value', function(snapshot){
				$('#spanMeGusta').text(snapshot.val());
			});
		}

		var imagen = $(this).children();

		$(imagen).attr({src: 'objetos/index/corazonRojo.png'});
		$(imagen).animate({
			width: 170+"%",
		    height: 170+"%",
		    marginTop: -35+"%",
		    marginLeft: -35+"%"
		  	}, 200, function() {
	    		$(imagen).animate({
					width: 100+"%",
				    height: 100+"%",
				    marginTop: 0,
				    marginLeft: 0
			}, 200, function() {
				$(imagen).attr({src: 'objetos/index/corazon.png'});
			});
		});//Fin de animar imagen

	});

});