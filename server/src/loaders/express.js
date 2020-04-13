import compression from 'compression';
import cors from 'cors';
import dotEnv from 'dotenv';

import environments from '../config/environments';

const expressLoader = {
  init: ({ app }) => {
    dotEnv.config(environments);

    app.use(compression());
    app.use(cors());

    app.get('/status', (_req, res) => res.status(200).end());
    app.head('/status', (_req, res) => res.status(200).end());

    app.enable('trust proxy');

    return app;
  }
};

export default expressLoader;
