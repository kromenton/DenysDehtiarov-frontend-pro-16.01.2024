document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");

    const form = document.createElement("form");
    form.id = "registrationForm";

    form.innerHTML = `
        <label for="firstName">First Name:</label><br>
        <input type="text" id="firstName" name="firstName" required><br>

        <label for="lastName">Last Name:</label><br>
        <input type="text" id="lastName" name="lastName" required><br>

        <label for="dob">Date of Birth:</label><br>
        <input type="text" id="dob" name="dob" placeholder="yyyy-mm-dd" required><br>

        <label>Gender:</label><br>
        <input type="radio" id="male" name="gender" value="male" required>
        <label for="male">Male</label><br>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br>

        <label for="city">City:</label><br>
        <select id="city" name="city" required>
            <option value="">Select City</option>
            <option value="Madrid">Madrid</option>
            <option value="Krakow">Krakow</option>
            <option value="London">London</option>
        </select><br>

        <label for="address">Address:</label><br>
        <textarea id="address" name="address" rows="4" cols="50" required></textarea><br>

        <label>Languages:</label><br>
        <input type="checkbox" id="english" name="languages" value="english">
        <label for="english">English</label><br>
        <input type="checkbox" id="spanish" name="languages" value="spanish">
        <label for="spanish">Spanish</label><b

        <br><br>
    `;

    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", displayData);

    container.appendChild(form);
    container.appendChild(saveButton);

    function displayData() {
        const dataDisplay = document.createElement("div");
        dataDisplay.id = "dataDisplay";
        container.appendChild(dataDisplay);

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const dob = document.getElementById("dob").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const city = document.getElementById("city").value.trim();
        const address = document.getElementById("address").value.trim();
        const languages = document.querySelectorAll('input[name="languages"]:checked');

        dataDisplay.innerHTML = "<h3>Entered Data:</h3>";
        const table = document.createElement("table");

        addRow("First Name:", firstName);
        addRow("Last Name:", lastName);
        addRow("Date of Birth:", dob);
        addRow("Gender:", gender ? gender.value : "Not specified");
        addRow("City:", city);
        addRow("Address:", address);
        addLanguagesRow();

        dataDisplay.appendChild(table);

        function addRow(label, value) {
            const row = document.createElement("tr");
            const labelCell = document.createElement("td");
            const valueCell = document.createElement("td");
            labelCell.textContent = label;
            valueCell.textContent = value;
            row.appendChild(labelCell);
            row.appendChild(valueCell);
            table.appendChild(row);
        }

        function addLanguagesRow() {
            const row = document.createElement("tr");
            const labelCell = document.createElement("td");
            const valueCell = document.createElement("td");
            labelCell.textContent = "Languages:";
            if (languages.length === 0) {
                valueCell.textContent = "Not specified";
            } else {
                languages.forEach(function (language, index) {
                    if (index !== 0) {
                        valueCell.textContent += ", ";
                    }
                    valueCell.textContent += language.value;
                });
            }
            row.appendChild(labelCell);
            row.appendChild(valueCell);
            table.appendChild(row);
        }
    }
});
