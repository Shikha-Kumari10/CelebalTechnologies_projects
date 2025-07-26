const axios = require('axios');

const fetchWeatherByCity = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await axios.get(url);
  return {
    location: res.data.name,
    temperature: res.data.main.temp,
    description: res.data.weather[0].description
  };
};

module.exports = { fetchWeatherByCity };
