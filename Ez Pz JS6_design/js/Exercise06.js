//FizzBuzz
//Display numbers from 1-100.
//From multiples of three display "Fizz".
//From multiples of five display "Buzz".
//From both multiples of three and five display "FizzBuzz".

function fizzBuzz() {
    for (var n = 1; n <= 100; n++){
        if (n % 3 === 0 && n % 5 === 0){
            numArray.push("FizzBuzz");
        }else if (n % 3 === 0){
            numArray.push("Fizz");
        }else if (n % 5 === 0){
            numArray.push("Buzz");
        }else{
            numArray.push(n);
        }
    }
}

var numArray = [];

fizzBuzz();

console.log(numArray);
