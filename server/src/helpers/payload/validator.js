const validations = require('../validations');

const validator = (payload, config = {}) => {
  let errors = {};

  Object.keys(config)
    .forEach((key) => {
      if (!Array.isArray(config[key])) {
        const error = validator(payload[key], config[key]);

        if (error && Object.keys(error).length) {
          errors[key] = error;
        }

        return;
      }

      config[key].forEach((conf) => {
        if (conf.childrens) {
          const error = payload[key].map(item => validator(item, conf.childrens));

          if (error && error.length) {
            errors[key] = error;
          }

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
