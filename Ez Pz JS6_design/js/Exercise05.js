//Fibonacci Generator

function fibonacciGenerator(n) {
    var output = [];

    if (n === 1){
        output.push(0);
    }else if (n === 2){
        output.push(0);
        output.push(1);
    }else{
        output.push(0);
        output.push(1);
            for (var i = 2; i < n; i++){
               output.push(output[output.length - 2] + output[output.length - 1]);
            }
    }

    alert(output);
    return output;

}

var sequence = prompt("Enter number of sequence:");

fibonacciGenerator(sequence);
