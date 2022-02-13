const API_ID = "4fd600b3b6bbece052d0f18ea2f57c8c";
const DEFAULT_VALUE = "--";

const searchInput = document.querySelector("#search-input");

const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

searchInput.addEventListener("change", function (e) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${API_ID}&units=metric&lang=vi`
  ).then(async (res) => {
    const data = await res.json();
    cityName.innerHTML = data.name || DEFAULT_VALUE;
    weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
    weatherIcon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` ||
        DEFAULT_VALUE
    );
    temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
    sunrise.innerHTML =
      moment.unix(data.sys.sunrise).format(`H:mm`) || DEFAULT_VALUE;
    sunset.innerHTML =
      moment.unix(data.sys.sunset).format(`H:mm`) || DEFAULT_VALUE;
    humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
    windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
  });
});
