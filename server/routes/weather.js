import express from 'express';
// import {} from '../actions/weatherActions';

const router = express.Router();

router.get('/geolocation', (req, res) => {
  const ip = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress;

  res.send(JSON.stringify({ ip }));
});

export { router as ApiRoute };
