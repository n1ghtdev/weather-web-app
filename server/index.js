/* eslint-disable */
import express from 'express';
import bodyParser from 'body-parser';
import { resolve } from 'path';
import setup from './middlewares/setupMiddleware';
import { router as routes } from './routes';

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

app.use(routes);

app.listen(port, (err) => {
  if (err) {
    return console.log(err.message);
  } else {
    console.log("Server running on localhost:" + port);
  }
});
