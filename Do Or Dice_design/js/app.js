function rollDice(){

var n = Math.random();
n = Math.floor(n * 6 + 1);
console.log(n);

var n2 = Math.random();
n2 = Math.floor(n2 * 6 + 1);
console.log(n2);

var dice = "img/dice" + n + ".png";
var dice2 = "img/dice" + n2 + ".png";
document.getElementsByTagName("img")[0].setAttribute("src", "" + dice);
document.getElementsByTagName("img")[1].setAttribute("src", "" + dice2);

if (n > n2){
	document.getElementsByTagName("p")[0].innerHTML = "<strong>Player 1 wins!</strong>";
	document.getElementsByTagName("p")[1].innerHTML = "Lose!";
	document.getElementsByTagName("p")[1].style.color = "black";
	document.getElementsByTagName("p")[0].style.color = "#4ECCA3";
}else if (n < n2){
	document.getElementsByTagName("p")[1].innerHTML = "<strong>Player 2 wins!</strong>";
	document.getElementsByTagName("p")[0].innerHTML = "Lose!";
	document.getElementsByTagName("p")[0].style.color = "black";
	document.getElementsByTagName("p")[1].style.color = "#4ECCA3";
}else {
	document.getElementsByTagName("p")[0].innerHTML = "Draw!";
	document.getElementsByTagName("p")[1].innerHTML = "Draw!";
	document.getElementsByTagName("p")[0].style.color = "#4ECCA3";
	document.getElementsByTagName("p")[1].style.color = "#4ECCA3";
}

}

