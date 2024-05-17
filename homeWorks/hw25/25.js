function generateList(array) {
    const ul = document.createElement('ul');

    array.forEach(item => {
        const li = document.createElement('li');
        if (Array.isArray(item)) {
            li.appendChild(generateList(item));
        } else {
            li.textContent = item;
        }
        ul.appendChild(li);
    });

    return ul;
}

// Приклад використання функції
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, [1, 2, 3], 4];

// Виведення масивів та результатів функції на сторінку
const displayArray = (title, array) => {
    const container = document.createElement('div');
    const header = document.createElement('h3');
    header.textContent = title;
    container.appendChild(header);
    container.appendChild(generateList(array));
    document.body.appendChild(container);
};

displayArray('Array 1', array1);
displayArray('Array 2', array2);
