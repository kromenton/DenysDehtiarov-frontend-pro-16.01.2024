function createSumFunction() {
    let sum = 0;

    return function (num) {
        sum += num;
        return sum;
    };
}

// Example :
const sum = createSumFunction();

console.log(sum(7));  // Output: 7
console.log(sum(2));  // Output: 9
console.log(sum(35)); // Output: 44
