//Tell the user how many days, weeks and months he/she have left if he/she lives until 90 years old.

//Assume there are 365 days in a year, 52 weeks and 12 months in a year.

function lifeInWeeks(age){
    var yearsRemaining = 90 - age;
    var daysRemaining = yearsRemaining * 365;
    var weeksRemaining = yearsRemaining * 52;
    var monthsRemaining = yearsRemaining * 12;
    
    console.log("You have " + daysRemaining + " days, " + weeksRemaining + " weeks, " + monthsRemaining + " months left.");
}

var yourInput = prompt("How old are you now?");

lifeInWeeks(yourInput);
