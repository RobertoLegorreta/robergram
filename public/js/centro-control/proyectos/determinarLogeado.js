function determinarLogeado(){
	firebase.auth().onAuthStateChanged(function(user) {
	  	if(user){
	    	//Usuario tiene la sesión activa
	  	}else{
	    	location.href = 'index.html';
	  	}
	});
}