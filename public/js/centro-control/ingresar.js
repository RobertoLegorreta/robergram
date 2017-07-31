function ingresar(){
	var email = $('#email').val();
	var password = $('#password').val();	

	if(validarSignIn(email, password)){
		firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			
			// console.log('Código de error : ' + errorCode);
			// console.log('Mensaje de error : ' + errorMessage);
			
			if(errorCode == 'auth/user-not-found'){
				alert('Los datos ingresados no coinciden con ninguna cuenta');
			}

			if(errorCode == 'auth/wrong-password'){
				alert('La contraseña que ingresaste es incorrecta');
			}
		});
	}
}

function validarSignIn(email, password){
	if(validamosCorreo(email) & validamosContrasena(password)){
		return true;
	}else{
		return false;
	}
}