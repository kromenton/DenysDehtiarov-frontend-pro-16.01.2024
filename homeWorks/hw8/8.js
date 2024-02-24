// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….). 
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}


// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
const exchangeRate = 27;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    let costInHryvnia = dollars * exchangeRate;
    console.log(dollars + " dollars = " + costInHryvnia + " hryvnias");
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
function printNumbers(x) {
    for (let i = 1; i <= 100; i++) {
        if (i * i <= x) {
            console.log(i);
        } else {
            break;
        }
    }
}

// Example :
const x = 200;
printNumbers(x);

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
function isPrime(num1) {
    if (num1 <= 1) {
        return false;
    }
    for (let i = 2; i <= num1 / 2; i++) {
        if (num1 % i === 0) {
            return false;
        }
    }
    return true;
}

// Example :
const num1 = 46;
if (isPrime(num1)) {
    console.log(num1 + " is a prime number");
} else {
    console.log(num1 + " is not a prime number");
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
function canBeOfThree(num2) {
    if (num2 <= 0) {
        return false;
    }

    while (num2 % 3 === 0) {
        num2 /= 3;
    }

    return num2 === 1;
}

// Example :
const num2 = 243;
if (canBeOfThree(num2)) {
    console.log(num2 + " can be obtained by raising 3 to some power");
} else {
    console.log(num2 + " cannot be obtained by raising 3 to any power");
}


