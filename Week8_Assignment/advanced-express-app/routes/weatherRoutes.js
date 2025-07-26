const express = require('express');
const { fetchWeatherByCity } = require('../utils/fetchWeather');
const router = express.Router();

router.get('/:city', async (req, res, next) => {
  try {
    const city = req.params.city;
    const data = await fetchWeatherByCity(city);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
