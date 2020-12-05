const express = require("express");
const router = express.Router();

const Weather = require("./weather");

const key = process.env.APIkey;

router.get("/weather", async (req, res) => {
  let weather = new Weather();
  try {
    let weatherData = await weather
      .getWeatherUsingCityName("islamabad", key)
      .then(() => {
        console.log("Done fetching data");
        // console.log(d);
      })
      .catch((err) => {
        console.log(err);
      });
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(weatherData, null, 4));
  } catch (err) {
    console.log(err);
  }
});

router.post("/weather", async (req, res) => {
  try {
    const { cityName } = req.body;
    let weather = new Weather();
    let weatherData = await weather
      .getWeatherUsingCityName(cityName, key)
      .catch((err) => {
        console.log(err);
      });
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(weatherData, null, 4));
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
