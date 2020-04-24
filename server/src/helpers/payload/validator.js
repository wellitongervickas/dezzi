const validationsTypes = require('../validations');

const generateError = (payload, item) => {
  const fn = validationsTypes[item.type];
  const error = fn(payload, item);

  if (error) {
    return {
      type: item.type,
      message: fn.message(payload, item),
    };
  }
}

const validator = (payload = {}, validations = {}) => {
  let errors = {};



  return errors;
};

module.exports = validator;
