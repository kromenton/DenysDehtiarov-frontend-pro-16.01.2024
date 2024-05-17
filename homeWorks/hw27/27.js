function displayData() {
    const form = document.getElementById("registrationForm");
    const dataDisplay = document.getElementById("dataDisplay");
    dataDisplay.innerHTML = "<h3>Entered Data:</h3>";
    dataDisplay.innerHTML += "<table border='1'>";
    dataDisplay.innerHTML += "<tr><td><strong>First Name:</strong></td><td>" + form.firstName.value + "</td></tr>";
    dataDisplay.innerHTML += "<tr><td><strong>Last Name:</strong></td><td>" + form.lastName.value + "</td></tr>";
    dataDisplay.innerHTML += "<tr><td><strong>Date of Birth:</strong></td><td>" + form.dob.value + "</td></tr>";
    const gender = document.querySelector('input[name="gender"]:checked');
    dataDisplay.innerHTML += "<tr><td><strong>Gender:</strong></td><td>" + (gender ? gender.value : "Not specified") + "</td></tr>";
    dataDisplay.innerHTML += "<tr><td><strong>City:</strong></td><td>" + form.city.value + "</td></tr>";
    dataDisplay.innerHTML += "<tr><td><strong>Address:</strong></td><td>" + form.address.value + "</td></tr>";
    dataDisplay.innerHTML += "<tr><td><strong>Languages:</strong></td><td>";
    const languages = document.querySelectorAll('input[name="languages"]:checked');
    if (languages.length === 0) {
        dataDisplay.innerHTML += "Not specified";
    } else {
        languages.forEach(function (language, index) {
            if (index !== 0) {
                dataDisplay.innerHTML += ", ";
            }
            dataDisplay.innerHTML += language.value;
        });
    }
    dataDisplay.innerHTML += "</td></tr>";
    dataDisplay.innerHTML += "</table>";
}