import express from 'express';
import { getLocationKey } from '../actions/weatherActions';

const router = express.Router();

router.get('/geolocation', (req, res) => {
  const ip = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress;

  getLocationKey(ip).then(data => res.send(JSON.stringify(data)));
});

export { router as ApiRoute };
