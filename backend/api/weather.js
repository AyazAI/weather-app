const axios = require("axios");
const baseURL = `http://api.openweathermap.org/data/2.5/weather?`;

class Weather {
  getWeatherUsingCityName = async (cityName, APIkey) => {
    let url = `${baseURL}q=${cityName}&appid=${APIkey}`;
    console.log(url);
    let data = await axios(url).data;
    return data;
  };
}

module.exports = Weather;
