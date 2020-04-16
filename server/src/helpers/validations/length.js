const validator = require('validator');

const length = (value = '', options = {}) => {
  if (['', undefined, null].indexOf(value) > -1) {
    return true;
  }

  return false;
};

length.message = (value, options) => {
  const {
    equals,
    min,
    max,
  } = options;

  const prefixLessThan = `${equals ? 'Deve ser menor ou igual a' : 'Deve ser menor que'} ${value}`
  const prefixGreaterThan = `${equals ? 'Deve ser maior ou igual a' : 'Deve ser maior que'} ${value}`
  const prefixAndGreaterThan = `${equals
    ? `Deve ser maior ou igual a ${min} e menor ou igual a ${max}`
    : `Deve ser maior que ${min} e menor que ${max}`} ${value}`

  return 'Não pode ficar em branco';
};

module.exports = length;
