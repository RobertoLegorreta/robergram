function determinarLogeado(){
	firebase.auth().onAuthStateChanged(function(user) {
	  	if(user){
	    	location.href = 'proyectos.html';
	  	}else{
	    	//Usuario está como log out
	  	}
	});
}