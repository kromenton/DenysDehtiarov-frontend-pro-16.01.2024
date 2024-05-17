function getWeather(city) {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=5d066958a60d315387d9492393935c19";

    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {

            const response = JSON.parse(xhr.responseText);
            const temperature = response.main.temp;
            const pressure = response.main.pressure;
            const description = response.weather[0].description;
            const humidity = response.main.humidity;
            const speed = response.wind.speed;
            const deg = response.wind.deg;
            const icon = response.weather[0].icon;

            document.getElementById('weather').innerHTML = "<h2>Weather in " + city + "</h2>" +
                "<p>Temperature: " + temperature + "°C</p>" +
                "<p>Pressure: " + pressure + " hPa</p>" +
                "<p>Description: " + description + "</p>" +
                "<p>Humidity: " + humidity + "%</p>" +
                "<p>Wind Speed: " + speed + " m/s</p>" +
                "<p>Wind Direction: " + deg + "°</p>" +
                "<img src='http://openweathermap.org/img/w/" + icon + ".png'>";
        }
    };

    xhr.send();
}

getWeather("LONDON");
