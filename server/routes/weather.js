import express from 'express';
import {
  getWeatherForecastByQuery,
  getWeatherForecastByIP,
} from '../actions/weatherActions';

const router = express.Router();

router.post('/forecast/by-query', (req, res) => {
  if (req.body.searchQuery) {
    getWeatherForecastByQuery(req.body.searchQuery).then(data =>
      res.send(JSON.stringify(data)),
    );
  } else {
    // send status error
    console.log('error');
  }
});

router.get('/forecast/by-ip', (req, res) => {
  const ip =
    (req.headers['x-forwarded-for'] || '').split(',').pop() ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  getWeatherForecastByIP(ip).then(data => res.send(JSON.stringify(data)));
});

export { router as ApiRoute };
