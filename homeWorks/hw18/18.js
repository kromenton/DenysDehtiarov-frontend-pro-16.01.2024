let arr = [];

const length = parseInt(prompt("Enter the length of the array:"));

for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt(`Enter element ${i}:`)));
}

// Не стал заморачиваться со стилями, просто перевод строки, чтобы не слипалось на странице.
document.write("<br><br><br>Original array: " + arr + "<br>");


arr.sort((a, b) => a - b);

document.write("<br><br>Sorted array: " + arr + "<br>");

arr.splice(2, 2);

document.write("<br><br>Array after removal: " + arr + "<br>");
