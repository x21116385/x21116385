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

//messages from animals
function revealMessage(){
    document.getElementById("hiddenMessage").style.display="block";
}
function revealMessage2(){
    document.getElementById("hiddenMessage2").style.display="block";
}
function revealMessage3(){
    document.getElementById("hiddenMessage3").style.display="block";
}

//vote for pet
function petAlert(){
    alert("Thanks for voting - Your treat will be delivered shortly!");
}

//form for reviews
function formReview(){
    if(!alert("Thank you for leaving us a review! It will be posted shortly.")){
        window.location.reload();
    }
}

//random facts
function writeRandomQuote(){
    var quotes = new Array();
    quotes[0] = "A cat cannot see directly under its nose.";
    quotes[1] = "Cats can rotate their ears 180 degrees.";
    quotes[2] = "Meows are not innate cat language—they developed them to communicate with humans!";
    quotes[3] = "A dog’s nose print is unique, much like a person’s fingerprint.";
    quotes[4] = "Human blood pressure goes down when petting a dog. And so does the dog’s.";
    quotes[5] = "Dogs are not colorblind. They can see blue and yellow.";
    var rand = Math.floor(Math.random()*quotes.length);
    alert(quotes[rand]);
}