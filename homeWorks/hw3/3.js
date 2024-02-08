const num1 = +prompt('enter first number');
const num2 = +prompt('enter second number');
const result1 = num1 + num2;
const result2 = num1 - num2;
const result3 = num1 * num2;
const result4 = num1 / num2;
alert(
  `${num1} + ${num2} = ${result1}   ${num1} - ${num2} = ${result2}   ${num1} * ${num2} = ${result3}   ${num1} / ${num2} = ${result4}`
);
alert(
  `${num1} + ${num2} = ${result1} `.concat(
    `${num1} - ${num2} = ${result2} `,
    `${num1} * ${num2} = ${result3} `,
    `${num1} / ${num2} = ${result4}`
  )
);
