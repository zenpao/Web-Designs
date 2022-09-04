$(document).ready(function() {

//#1 At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColors = ["red", "blue", "green", "yellow"];

//#5 At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];

//#10 At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//#19 You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

//#20 Create a new variable called level and start at level 0.
var level = 0;

//#21 Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //#22 The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
  });

//#2 Inside game.js create a new function called nextSequence().
function nextSequence(){

//#31 Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
userClickedPattern = [];

//#24 Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
level++;

//#25 Inside nextSequence(), update the h1 with this change in the value of level.
$("#level-title").text("Level " + level);


//#3 Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
var randomNumber = Math.floor(Math.random() * 4);

 //#4 Create a new variable called randomChosenColor and use the randomNumber to select a random color from the buttonColors array.
var randomChosenColor = buttonColors[randomNumber];

 //#6 Add the new randomChosenColor generated in step 4 to the end of the gamePattern.
gamePattern.push(randomChosenColor);

//#7 Use jQuery to select the button with the same id as the randomChosenColor.
//#8 Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected.
$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

//#9 Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button color selected.
//var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
//audio.play(); 

//#15 Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
playSound(randomChosenColor);
}

		//#11 Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
		$(".btn").click(function() {

		//#12. Inside the handler, create a new variable called userChosenColor to store the id of the button that got clicked.
		var userChosenColor = $(this).attr("id");

		//#13. Add the contents of the variable userChosenColor created to the end of this new userClickedPattern.
		 userClickedPattern.push(userChosenColor);

		 //#23
		  playSound(userChosenColor);
		  animatePress(userChosenColor);

  		//#27 Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  		checkAnswer(userClickedPattern.length-1);
		});

//#26 Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //#28 Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //#29 If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //#30 Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");
      //#32 In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
      playSound("wrong");

      //#33 In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //#34 Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $("#level-title").text("Game Over, Press Any Key to Restart");

      //#36. Call startOver() if the user gets the sequence wrong.
      startOver();
    }
}

function playSound(name) {

  //#14 Take the code we used to play sound in the nextSequence() function and add it to playSound().
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//#16 Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {

  //#17 Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //#18 Use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//#35 Create a new function called startOver().
function startOver() {

  //#37 Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}


//nextSequence();

});
