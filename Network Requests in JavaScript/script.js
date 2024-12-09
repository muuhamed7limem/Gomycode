document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = "a906f2cf42b2f62289958a57aca606c6" ; // API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
});

function displayWeather(data) {
    document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
}
