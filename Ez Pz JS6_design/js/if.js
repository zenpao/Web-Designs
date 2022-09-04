//If conditionals

var age = prompt("How old are you?");

if (age <= 17) {
    console.log("Still young.");
}else if (age >= 18){
    console.log("Pretty legal.");
}else if (typeof(age) !== "number" || typeof(age) === "string"){
    console.log("Not a number!");
}
