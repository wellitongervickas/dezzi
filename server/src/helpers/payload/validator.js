const validations = require('../validations');

const validator = (payload, config = {}) => {
  let errors = {};

  Object.keys(config)
    .forEach((key) => {
      if (!Array.isArray(config[key])) {
        errors[key] = validator(payload[key], config[key]);
        return;
      }

      config[key].forEach((conf) => {
        if (conf.childrens) {
          errors[key] = payload[key].map(item => validator(item, conf.childrens));
          return;
        }

        const fn = validations[conf.type];
        const error = fn(payload[key], conf);

        if (error) {
          errors[key] = {
            type: conf.type,
            message: fn.message(payload[key], conf),
          };
        }
      });
    });

  return errors;
};

module.exports = validator;
