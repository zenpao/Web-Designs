//Calculate BMI = weight(kg) / height*height (m*m)

function calculateBMI(weight,height){
    var kg = weight;
    var mSquare = Math.pow(height, 2);
    return kg / mSquare;
}

var value = prompt("Enter your weight(kg):");
var value2 = prompt("Enter your height(m):");

var bmi = calculateBMI(value,value2);

console.log(Math.round(bmi));
