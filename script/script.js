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

//game cat dog mouse in gallery
//cat=rock & dog=paper & mouse=scissors
document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

function user(){
    var userChoice = this.id;
    console.log("User: " + userChoice)
    var computerChoice = Math.random();
        if (computerChoice<0.34){
            computerChoice="rock";
        }
        else if(computerChoice<=0.67){
            computerChoice = "paper";
        }
        else{
            computerChoice="scissors";
        }
    console.log("Computer: " + computerChoice);
    console.log(compare(userChoice, computerChoice)); 

    //tie
    function compare(choice1, choice2){
		if (choice1===choice2){
            alert("Your opponent chose the same option: The result is a tie! Try again?");
        }
        //cat
        else if(choice1==="rock"){
            if(choice2==="scissors"){
                alert("Your opponent chose Mouse: You win!");
            }
            else{
                alert("Your opponent chose Dog: You lose!");
            }
		}
        //dog
        else if(choice1==="paper"){
            if(choice2==="rock"){
                alert("Your opponent chose Cat: You win!");
            }
            else{
                alert("Your opponent chose Mouse: You lose!");
            }
		}
		//mouse
		else if(choice1==="scissors"){
            if(choice2==="rock") {
                alert("Your opponent chose Dog: You lose!");
            } 
            else{
                alert("Your opponent chose Cat: You win!");
            }
        }
    }
}

//stars under game
const ratingStars = [...document.getElementsByClassName("rating__star")];
function executeRating(stars){
    const starClassOne= "rating__star fas fa-star";
    const starClassTwo = "rating__star far fa-star";
    const starsLength = stars.length;
  
    let i;
    stars.map((star)=>{
    star.onclick=()=>{
        i=stars.indexOf(star);
        if(star.className===starClassTwo){
            for(i;i>=0;--i) stars[i].className = starClassOne;
            } 
            else{
                for(i;i<starsLength;++i) stars[i].className=starClassTwo;
            }
        };
    });
}
executeRating(ratingStars);

//form validation
function validateForm() {
    let x = document.forms["registration"]["namePO"].value;
    if (x == "") {
      alert("Please enter your first name on the form");
      return false;
    }
    let y = document.forms["registration"] ["email"].value;
    if (y == "") {
      alert("email is needed to contact you, please enter an email address");
      return false;
    }
    let z = document.forms["registration"] ["petName"].value;
    if (z == "") {
      alert("Pet's name must be entered on the form");
      return false;
    }
}







 

