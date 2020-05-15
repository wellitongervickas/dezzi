import * as helperValidations from 'helpers/validations';

// retornar apenas true ou message
const handleValitaion = (value, validations) => {
  let message = null;
  validations.forEach((validation) => {
    const fn = helperValidations[validation.type];
    const isInvalid = fn(value);

    if (isInvalid) {
      message = fn.message();
    }
  });

  return !message || message;
};

export default handleValitaion;
