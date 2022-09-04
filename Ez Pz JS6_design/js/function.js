//3 types of Functions, the use of Operator & Constructor Function

/* ═══════════════════════basic function═════════════════════════ */
function sayHello() {
    alert("Hello World!");
    console.log("Hello World!");
}

sayHello();

/* ═════════════════════function w/ input═══════════════════════ */
function giveFs(amount){
    var fCost = 9999;
    var fGiven = fCost / amount;
    alert("I can only give: " + fGiven + " Fs.");
    console.log("I can only give: " + fGiven + " Fs.");
}

giveFs(99);

/* ═════════════════function w/ input & return══════════════════ */
function getSlurpey(money) {
    var slurpeyPrice = 25;   
    var numberOfDrinks = Math.floor(money / slurpeyPrice);
    alert("You can buy " + numberOfDrinks + " Slurpees with " + money + " pesos.");
    console.log("You can buy " + numberOfDrinks + " Slurpees with " + money + " pesos.");
    return money % slurpeyPrice;
}

var change = getSlurpey(100);
alert("You have a change of: " + change + " pesos.");

/* ═════════════════════operator function═══════════════════════ */
function add(num1, num2) {
    return num1 + num2;
}

function subt(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}

calculator(2,2,add);

/* ════════════════════constructor function══════════════════════ */
function JobApplicant(name, age, workExperience, skills) { //Name of Objects are not Camel-cased
    this.name = name;
    this.age = age;
    this.workExperience = workExperience;
    this.skills = skills;
}

var jobApplicant1 = new JobApplicant("Jentzen Paolo Javier", 25, true, ["Video Editing", "Photo Editing", "Web Design", "Basic Programming"]);

console.log(jobApplicant1);
