const uuid = require('uuid').v1;
const {
  demonetization,
} = require('../helpers/sanitizers/monetization');

const Billing = {
  create: (billing = {}) => ({
    value: demonetization(billing.value),
    uuid: billing.uuid || uuid(),
  }),
};

module.exports = Billing;
