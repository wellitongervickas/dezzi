const bcrypt = require('bcryptjs');
const uuid = require('uuid').v1;

const User = {
  create: async (user = {}) => ({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: await bcrypt.hash(user.password || '', 10),
    uuid: uuid(),
  }),
  validations: {
    last_name: [{
      type: 'blank',
    }],
    first_name: [{
      type: 'blank',
    }],
    email: [{
      type: 'blank',
    }, {
      type: 'email',
    }],
    password: [{
      type: 'blank',
    }, {
      type: 'length',
      equals: true,
      min: 8,
      max: 16,
    }],
  },
};

module.exports = User;
