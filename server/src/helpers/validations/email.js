const validator = require('validator');

const email = (value = '') => {
  if (['', null, undefined].indexOf(value) > -1) {
    return true;
  }

  if (typeof value !== 'string' || Array.isArray(value)) {
    return true;
  }

  return !validator.isEmail(value);
};

email.message = () => 'Não é um e-mail válido';

module.exports = email;
