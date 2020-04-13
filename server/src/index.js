import express from 'express';
import loaders from './loaders';

const app = express();

const startServer = async () => {
  await loaders({ app });

  app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, (err) => {
    if (err) {
      throw(err);
    }

    console.log(`App running on: http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
  });
};

startServer();

export default app;
