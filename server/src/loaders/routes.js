const routes = require('../routes');
const { errors } = require('celebrate');

const routesLoader = {
  init: (app) => {
    routes(app);

    app.use(errors());

    return app;
  }
};

module.exports = routesLoader;
