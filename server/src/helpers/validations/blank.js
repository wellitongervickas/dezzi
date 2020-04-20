const blank = (value = '') => {
  if (['', undefined, null].indexOf(value) > -1) {
    return true;
  }

  if (Array.isArray(value) && !value.length) {
    return true;
  }

  if (!Array.isArray(value) && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  }

  return false;
};

blank.message = () => 'Não pode ficar em branco';

module.exports = blank;
