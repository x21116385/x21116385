//Security check to access an area of the page.
function securityCheck(){
	var pass=prompt("My mexican friend?");
	if (pass=="amigo"){
		alert("Access granted. The client site will open in a new window.")
    window.open('https://www.w3schools.com', '_blank');
    	}
	else{
		alert("You have entered the wrong password");
	    }
}

function message(){
	alert("Your form has been sent");
}

function message(){
	document.getElementById("formPet" ).style.visibility = "hidden"; 
	let userName = document.getElementById("namePO").value;
	let userEmail = document.getElementById("emailPO").value;
    let userPet = document.getElementById("petName").value;
	document.getElementById("messagetext").innerHTML = userName+", thank you for contacting us.  We will be in touch via "+userEmail+" shortly with a response. We look forward to meeting you and "+userPet+" soon.";
	document.body.scrollTop =document.documentElement.scrollTop = 0;
    return false; 

}

