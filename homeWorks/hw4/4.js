const action = prompt(
  'What mathematical operation do you want to perform? add, sub, mult, div ?'
);
const num1 = +prompt('Enter first number');
const num2 = +prompt('Enter second number');
let result;
let mark;
if (action === 'add') {
  result = num1 + num2;
  mark = '+';
} else if (action === 'sub') {
  result = num1 - num2;
  mark = '-';
} else if (action === 'mult') {
  result = num1 * num2;
  mark = '*';
} else if (action === 'div') {
  result = num1 / num2;
  mark = '/';
}
alert(`"${num1} ${mark} ${num2} = ${result}"`);
