//Actual date, day, time
function formatDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monay",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let date = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  document.querySelector("#actual-day").innerHTML = day;
  document.querySelector("#actual-date").innerHTML = date;
  document.querySelector("#actual-hours").innerHTML = hours;
  document.querySelector("#actual-minutes").innerHTML = minutes;
}
formatDate();

//Change temperature after searching
function currentCity(event) {
  event.preventDefault();
  let city = document.querySelector("#text-input").value;
  sccsd(city);
}
document.querySelector("#form").addEventListener("submit", currentCity);

function sccsd(city) {
  let apiKey = "743bee57fddbfaf52447193a87d5dd25";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  let temp = document.querySelector(".currentTEmperature");
  temp.innerHTML = Math.round(response.data.main.temp);
}
//Show weather in current location
function nowIKnow(position) {
  let apiKey = "743bee57fddbfaf52447193a87d5dd25";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function currentCicy(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(nowIKnow);
}

document.querySelector("#locationNow").addEventListener("click", currentCicy);

//Change temperature when press F
function changeFahrenheit() {
  let temp = document.querySelector(".currentTEmperature");
  temp.innerHTML = 66;
}
let fahrenheitData = document.querySelector("#fahrenheit");
fahrenheitData.addEventListener("click", changeFahrenheit);

//Change temperature when press C
function changeCelsius() {
  let temp = document.querySelector(".currentTEmperature");
  temp.innerHTML = 19;
}
let celsiusData = document.querySelector("#celsius");
celsiusData.addEventListener("click", changeCelsius);
