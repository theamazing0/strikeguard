var lightningText = document.getElementById("lightningLocationText");
var button = document.getElementById("lightningLocationButton");
var latitude = null;
var longitude = null;

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
  latitude = crd.latitude;
  longitude = crd.longitude;
  getWeather();
}

function error(err) {
  console.warn("Error.");
}

navigator.geolocation.getCurrentPosition(success, error, options);

async function getWeather() {
  if (latitude == null || longitude == null) {
    return;
  }
  var cityWeather = await fetch("https://api.weather.gov/points/" + latitude.toString() + "," + longitude.toString());
  cityWeather = await cityWeather.json();
  var weatherForecast = await fetch(cityWeather.properties.forecast);
  weatherForecast = await weatherForecast.json();
  weatherForecast = weatherForecast.properties.periods[0];
  var forecast = weatherForecast.detailedForecast;
  lightningText.textContent = forecast;
  if (forecast.includes("thunder")) {
    thunderDetected.textContent = "There is a thunderstorm in your area. Go indoors.";
  } else {
    thunderDetected.textContent = "There is no thunderstorm in your area.";
  }
};
getWeather();