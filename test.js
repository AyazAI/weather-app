const axios = require("axios");

axios
  .get(
    "http://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=7224047b0c85982127399145b2b71251"
  )
  .then((d) => {
    console.log(d);
  })
  .catch((e) => {
    console.log(e);
  });
