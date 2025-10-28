const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const API_KEY =process.env.API;


app.get("/", (req, res) => {
    const london = {
    city: "London",
    temp: 18,
    condition: "Cloudy",
    humidity: 65,
    icon: "https://cdn.weatherapi.com/weather/64x64/day/116.png"
  };
  res.render("index", { weather:null, error: null });
});

app.post("/", async (req, res) => {
  const city = req.body.city;
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    const weather = {
      city: data.location.name,
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      humidity: data.current.humidity,
    };

    res.render("index", { weather, error: null });
  } catch (err) {
    res.render("index", { weather: null, error: "City not found!" });
  }
});

app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));
