// const validator = require('validator');

const length = (value = '', options) => {
  if (!options) {
    return true;
  }

  if (['', undefined, null].indexOf(value) > -1) {
    return true;
  }

  const {
    min,
    max,
    equals,
  } = options;

  const useMax = typeof max === 'number';
  const useMin = typeof min === 'number';

  if (!useMax && useMin) {
    if (!equals && value <= min) {
      return true;
    }

    if (equals && value < min) {
      return true;
    }
  }

  if (!useMin && useMax) {
    if (!equals && value >= max) {
      return true;
    }

    if (equals && value > max) {
      return true;
    }
  }

  if (useMax && useMin) {
    if (!equals && (value >= max || value <= min)) {
      return true;
    }

    if (equals && (value > max || value < min)) {
      return true;
    }
  }

  return false;
};

length.message = (_value, options = {}) => {
  const {
    equals,
    min,
    max,
  } = options;

  const prefixLessThan = `${equals ? 'Deve ser menor ou igual a' : 'Deve ser menor que'} ${max}`
  const prefixGreaterThan = `${equals ? 'Deve ser maior ou igual a' : 'Deve ser maior que'} ${min}`

  const prefixAndGreaterThan = equals
    ? `Deve ser maior ou igual a ${min} e menor ou igual a ${max}`
    : `Deve ser maior que ${min} e menor que ${max}`;

  if (!min && max >= 0) {
    return prefixLessThan;
  }

  if (!max && min >= 0) {
    return prefixGreaterThan;
  }

  if (max >= 0 && min >= 0) {
    return prefixAndGreaterThan;
  }

  return 'Valores inválidos';
};

module.exports = length;
