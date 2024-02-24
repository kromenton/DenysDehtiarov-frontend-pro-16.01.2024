function removeElement(arr, item) {
    const index = arr.indexOf(item);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}

// Example :
const arr = [2, 7, 45, 3, 5, 26, 17];
removeElement(arr, 5);
console.log(arr);
// Output: [2, 7, 45, 3, 26, 17]
