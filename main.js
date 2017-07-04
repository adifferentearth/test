function clicked(){
	
	var user = document.getElementById('username');
	var pass = document.getElementById('password');

	var coruser = "test";
	var corpass = "123";

	if(user.value == coruser) & (pass.value == corpass){

		window.alert("You are now logged in");
		 
	} else {

		window.alert("Incorrect Password or Username");
	}
	else {
		window.alert("Incorrect Password or Username");
	}
}

