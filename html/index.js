'use strict';

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`
    get(url).then(function (response) {
        const currTemp = Math.round(response.main.temp);
        const spanCurrentTemp = document.querySelector('#currentTemp');
        CurrentTemp.innerHTML = currTemp;
    })
    .catch(function (error) {
        console.log("Please add your api key to the fetch url");
    });
} 

fetch("https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=2e988d0dd71c48d57f928c742b85072b&units=imperial")
.then(response => response.json())
.then(body => {
document.getElementById("weather").innerHTML = body.main.temp + "°";
document.getElementById("weather").innerHTML = body.main.pressure + "°";
})
.catch(error => alert("Please add your api key to the fetch url"));


