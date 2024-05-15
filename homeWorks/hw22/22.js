const randomIndex = Math.floor(Math.random() * 9) + 1;
const imagePath = "images/";
const imgElement = document.createElement("img");
imgElement.src = imagePath + randomIndex + ".jpg";
imgElement.style.display = "block";
imgElement.style.margin = "auto";
document.body.appendChild(imgElement);

