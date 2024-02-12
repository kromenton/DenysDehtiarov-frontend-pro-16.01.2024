const number1 = Number(prompt('enter first number'));
const number2 = Number(prompt('enter second number'));
const number3 = Number(prompt('enter third number'));

if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
    const average = (number1 + number2 + number3) / 3;
    alert('Arithmetic mean : ' + average);
} else {
    alert('Enter correct numbers');
}
