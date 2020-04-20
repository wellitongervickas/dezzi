const validator = require('../helpers/payload/validator');
const blank = require('../helpers/validations/blank');

const middlewareValidator = (validations) => {
  return function(req, res, next) {
    if (blank(validations)) {
      next();
    }

    Object.keys(validations)
      .forEach((key) => {
        const errors = validator(req[key], validations[key]);

        if (!blank(errors)) {
          return res.status(422).send({ errors });
        } else {
          next();
        }
      });
  };
};

module.exports = middlewareValidator;
