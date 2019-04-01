import express from 'express';
import { ApiRoute } from './weather';

const router = express.Router();

router.use('/api', ApiRoute);

export { router };
