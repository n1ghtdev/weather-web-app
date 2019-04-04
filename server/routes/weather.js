import express from 'express';
import {
  get12HourForecastByIP,
  get5DayForecastByIP,
  get12HourForecast,
  get5DayForecast,
  getCurrentWeather
} from '../actions/weatherActions';

const router = express.Router();

router.get('/forecast/hourly-onload', (req, res) => {
  const ip = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress;
  

  getCurrentWeather(ip).then(data => res.send(JSON.stringify(data)));

  // getLatLonByIP(ip).then(data => console.log(data));
  // get12HourForecastByIP(ip).then(data => res.send(JSON.stringify(data)));
  // getCurrentWeather(ip).then(data => res.send(JSON.stringify(data)));
});

// just example to work with
router.post('/forecast/hourly-search', (req, res) => {
  const query = req.body.query;
  console.log('q');
  console.log(query);
  get12HourForecast(query).then(data => res.send(JSON.stringify(data)));
});

router.get('/forecast/daily-onload', (req, res) => {
  const ip = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress;

  get5DayForecastByIP(ip).then(data => res.send(JSON.stringify(data)));
});

router.post('/forecast/daily-search', (req, res) => {
  const query = req.body.query;
  get5DayForecast(query).then(data => res.send(JSON.stringify(data)));
});

export { router as ApiRoute };
