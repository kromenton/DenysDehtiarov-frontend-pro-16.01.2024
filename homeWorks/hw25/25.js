function generateList(array) {
    const ul = document.createElement('ul');
    let nestedArrayIndex = 0;

    function generateNestedList(nestedArray) {
        const nestedUl = document.createElement('ul');

        nestedArray.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${nestedArrayIndex}.${item}`;
            nestedUl.appendChild(li);
        });

        return nestedUl;
    }

    array.forEach(item => {
        const li = document.createElement('li');

        if (Array.isArray(item)) {
            nestedArrayIndex++;
            const nestedUl = generateNestedList(item);
            li.appendChild(nestedUl);
        } else {
            li.textContent = item;
        }
        ul.appendChild(li);
    });

    return ul;
}

const array1 = [1, 2, [1, 2, 3], 3, [1, 2, 3]];

const result = generateList(array1);
document.body.appendChild(result);

