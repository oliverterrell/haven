import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/', (req, res, next) => {
  try {
    console.log('hello WRLD');
    res.status(200).send('hello WRLD');
  } catch (error) {
    next(error);
  }
});

export { apiRouter };
