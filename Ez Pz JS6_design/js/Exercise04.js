//Determine if the year is a Leap year.
//Leap years are years that can be exactly divided by 4.
//EXCEPT if the year is divisible by 100 then it isn't.
//EXCEPT if it can be exactly divided by 400.

function isLeapYear(year){
    var test1 = year % 4;
    var test2 = year % 100;
    var test3 = year % 400;

    if (test1 === 0){
        if (test2 === 0){
            if (test3 === 0){
                console.log(year + " is a Leap year.");
            }else{
                console.log(year + " is NOT a Leap year.");
            }
        }else{
            console.log(year + " is a Leap year.");
        }

    }else{
        console.log(year + " is NOT a Leap year.");
    }
}

var input = prompt("Enter year:");

isLeapYear(input);
