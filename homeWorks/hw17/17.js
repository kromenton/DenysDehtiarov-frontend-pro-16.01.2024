function calcAverage(arr) {
    let sum = 0;
    let count = 0;


    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }

    if (count > 0) {
        return sum / count;
    } else {
        return "No numeric elements found";
    }
}

// Example :
const array = [10, "hello", true, 25, "world", 35, false, -5];
const average = calcAverage(array);
console.log("Average:", average);
