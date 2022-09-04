//Get the number of drum buttons who has the "drum" class.
var numOfDrumBtns = document.querySelectorAll(".drum").length;

//Place Event listeners to all buttons with "drum" class.
for (var n = 0; n < numOfDrumBtns; n++){
	document.querySelectorAll(".drum")[n].addEventListener("click", handleButton); //Handle Button press
}

//Function for handling Button press
function handleButton() {
	buttonAnimation(this.textContent);
	var audio;
	switch (this.textContent) {
	  case "a":
		audio = new Audio('sounds/crash.mp3');
		audio.play(); 
	    break;
	  case "s":
		audio = new Audio('sounds/tom-3.mp3');
		audio.play();
	    break;
	  case "d":
		audio = new Audio('sounds/tom-1.mp3');
		audio.play();
	    break;
	  case "sb":
		audio = new Audio('sounds/kick-bass.mp3');
		audio.play();
	    break;
	  case "j":
		audio = new Audio('sounds/tom-2.mp3');
		audio.play();
	    break;
	  case "k":
		audio = new Audio('sounds/tom-4.mp3');
		audio.play();
	    break;
	  case "l":
		audio = new Audio('sounds/snare.mp3');
		audio.play();
		break;
}
	console.log(this.innerHTML);
	console.log(this.textContent);
}

//Place Event listener to the whole document to detect keyboard press.
document.addEventListener("keypress", function(event) {
	buttonAnimation(event.key);
	var audio;
	switch (event.key) {
	  case "a":
		audio = new Audio('sounds/crash.mp3');
		audio.play(); 
	    break;
	  case "s":
		audio = new Audio('sounds/tom-3.mp3');
		audio.play();
	    break;
	  case "d":
		audio = new Audio('sounds/tom-1.mp3');
		audio.play();
	    break;
	  case " ":
		audio = new Audio('sounds/kick-bass.mp3');
		audio.play();
	    break;
	  case "j":
		audio = new Audio('sounds/tom-2.mp3');
		audio.play();
	    break;
	  case "k":
		audio = new Audio('sounds/tom-4.mp3');
		audio.play();
	    break;
	  case "l":
		audio = new Audio('sounds/snare.mp3');
		audio.play();
		break;
}
	console.log(event.key);	
});

function buttonAnimation(currentKey) {
	var activeState = document.querySelector("." + currentKey); //Gets the class.

	activeState.classList.add("pressed"); //Add the class "pressed".

	setTimeout(function() {
		activeState.classList.remove("pressed");
	}, 100);

}
