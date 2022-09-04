//Capitalize 1st letter Challenge.

var yourName = prompt("What's your first name?");
yourName = yourName.toLowerCase();
var cap1stLetter = yourName.slice(0,1).toUpperCase();

console.log("Hi! " + cap1stLetter + yourName.slice(1,yourName.length));
