//Arrays

var guestList = ["Harry", "Ron", "Hermione", "Frodo", "Sam", 25];

guestList.pop();
guestList.push("Legolas");

console.table(guestList);
console.log("No. of guests inside the array: " + guestList.length);
console.log("Smartest: " + guestList[2]);
console.log("Is Hagrid included in the list? " + guestList.includes("Hagrid"));
