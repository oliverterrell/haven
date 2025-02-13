import { Router } from 'express';

const apiRouter = Router();

apiRouter.use('/api', apiRouter);

export { apiRouter };
