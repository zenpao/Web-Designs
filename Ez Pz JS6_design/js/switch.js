//Switch Statement

var fruit = 'Papayas';
switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a gram.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a gram.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log("Sorry, we are out of " + fruit + ".");
}
