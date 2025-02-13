import express, { json } from 'express';
import { createServer as createHttpServer } from 'http';
import { apiRouter } from './routes/apiRouter';

const app = express();
const httpServer = createHttpServer(app);

app.use(json());
app.use('/api', apiRouter, errorMiddleware);

httpServer.listen(process.env.PORT, async () => {
  console.info(`backend ${process.env.NODE_ENV ?? 'development'} server listening...`);
});
