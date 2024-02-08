const action = prompt(
  'What mathematical operation do you want to perform? add, sub, mult, div ?'
);
const num1 = +prompt('Enter first number');
const num2 = +prompt('Enter second number');
let result;
let symbol;
if (action === 'add') {
  result = num1 + num2;
  Symbol = '+';
} else if (action === 'sub') {
  result = num1 - num2;
  Symbol = '-';
} else if (action === 'mult') {
  result = num1 * num2;
  Symbol = '*';
} else if (action === 'div') {
  result = num1 / num2;
  Symbol = '/';
}
alert(`"${num1} ${Symbol} ${num2} = ${result}"`);
