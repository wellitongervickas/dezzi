const UserController = require('./controllers/UserController');
// const ContactController = require('./controllers/ContactController');
// const BillingController = require('./controllers/BillingController');

const routes = app => {
  [{
    path: '/users',
    controller: UserController,
  }].forEach((route) => app.use(route.path, route.controller));

  app.all('*', (_req, res) => {
    return res.status(404).send();
  });
};

module.exports = routes;
