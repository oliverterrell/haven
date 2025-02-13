import express, { json } from 'express';
import { createServer as createHttpServer } from 'http';
import { apiRouter } from './routes/apiRouter.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';

const app = express();
const httpServer = createHttpServer(app);

app.use(json());
app.use('/api', apiRouter, errorMiddleware);

httpServer.listen(8000, async () => {
  console.info(`backend ${process.env.NODE_ENV ?? 'development'} server listening...`);
});

export default app;
