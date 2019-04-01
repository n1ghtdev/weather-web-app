import express from 'express';
// import {} from '../actions/weatherActions';

const router = express.Router();

const WEATHER_CURRENT = '/weather/current';
const WEATHER_FORECAST = '/weather/forecast';

router.post(WEATHER_CURRENT, (req, res) => {
  // const result = addTodo(req.body);
  // res.send(JSON.stringify(result));
});

router.post(WEATHER_FORECAST, (req, res) => {
  // const result = removeTodo(req.body);
  // return res.status(200).send(result);
});

export { router as ApiRoute };
