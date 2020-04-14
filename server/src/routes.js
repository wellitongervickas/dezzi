const UserController = require('./controllers/UserController');
const ContactController = require('./controllers/ContactController');
const BillingController = require('./controllers/BillingController');

const routes = app => {
  app.use('/users', UserController);
  app.use('/contacts', ContactController);
  app.use('/billings', BillingController);

  app.all('*', (_req, res) => {
    return res.status(404).send();
  });
};

module.exports = routes;
