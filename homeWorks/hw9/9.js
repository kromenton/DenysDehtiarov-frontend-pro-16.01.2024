function pow(num, degree) {
    if (degree === 0) {
        return 1;
    } else if (degree === 1) {
        return num;
    } else if (degree < 0) {
        return 1 / pow(num, -degree);
    } else {
        return num * pow(num, degree - 1);
    }
}

// Example :
const num = 3;
const degree = 4;
console.log(pow(num, degree));
