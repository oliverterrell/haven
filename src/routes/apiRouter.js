import { Router } from 'express';
import { data } from '../data.js';

const apiRouter = Router();

apiRouter.get('/', (req, res, next) => {
  try {
    console.log('hello WRLD');
    res.status(200).send('hello WRLD');
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/companies', (req, res, next) => {
  try {
    const { cik, name, ticker, exchange } = req.query;

    const companies = data.filter((company) => company.exchange === exchange);

    console.log('companies', companies);

    res.status(200).send({ companies });
  } catch (error) {
    next(error);
  }
});

export { apiRouter };
