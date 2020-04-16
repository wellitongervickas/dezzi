const validator = (validations) => {
  return function(req, res, next) {
    console.log(validations);
    console.log(req);
    console.log(res);
    next();
  };
};

module.exports = validator;
