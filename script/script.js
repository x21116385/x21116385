//Security check to access an area of the page.
function securityCheck(){
	var pass=prompt("My mexican friend?");
	if (pass=="amigo"){
		grantAccess();
	}
	else{
		alert("You have entered the worng password");
	}
}
function grantAccess(){
	alert("Access granted amigo!")
}

function message(){
	var userName = document.getElementById("namePO").value;
	var userEmail = document.getElementById("emailPO").value;
	var userPet = document.getElementById("petName").value;
	document.getElementById("messagetext").innerHTML = (userName+", thank you for your message. We will be in touch via "+userEmail+" shortly with a response. we look forward to meeting you and "+userPet);
	document.getElementById("formPet").style.visibility = "hidden";

}