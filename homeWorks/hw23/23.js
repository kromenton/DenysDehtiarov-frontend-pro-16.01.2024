// Створення поля вводу
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "myInput");
input.style.margin = "50px";
document.body.appendChild(input);

const div = document.createElement("div");
div.setAttribute("id", "myDiv");
div.style.display = "none";
div.textContent = "===DIV DIV DIV DIV DIV DIV DIV DIV DIV===";
document.body.appendChild(div);

input.addEventListener("focus", function () {
    div.style.display = "flex";
    div.style.margin = "20px auto";
});

input.addEventListener("blur", function () {
    div.style.display = "none";
});
