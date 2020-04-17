const ErrorModel = {
  create: (error) => ({
    key: error.key,
    type: error.type,
    message: error.message,
  }),

  createList: (errors = []) => {
    let errosList = {};

    errors.forEach((error) => {
      Object.keys(error)
        .forEach((key) => {
          if (typeof error[key] === 'string') {
            return;
          }

          if (Array.isArray(error[key]) && error[key].length) {
            errosList[key] = [ErrorModel.createList(error[key])];
            return;
          } else if (!Array.isArray(error[key]) && error[key] && !error[key].key) {
            errosList[key] = ErrorModel.createList([error[key]]);
            return;
          }

          errosList[key] = ErrorModel.create({
            key: key,
            type: error[key].type,
            message: error[key].message,
          });
        });
    });

    return errosList;
  },
};

module.exports = ErrorModel;
