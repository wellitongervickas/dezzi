const bcrypt = require('bcryptjs');
const uuid = require('uuid').v1;

const User = {
  create: async (data = {}) => ({
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: await bcrypt.hash(data.password || '', 10),
    uuid: uuid(),
  })
};

module.exports = User;
