const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apis = require("./api");
app.use("/api", apis);

app.use("/", (req, res) => {
  res.send("Visit api/weather");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/api/weather`);
});
