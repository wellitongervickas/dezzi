const conn = require('../database/conn');
const jwt = require('../helpers/api/jwt');
const User = require('../models/User');

const UserServices = {
  createUser: async (req, res) => {
    const user = await User.create(req.body)
    await conn('users').insert(user);

    return res.send({
      token: jwt.generator({
        uuid: user.uuid,
      }),
    });
  },

  getUsers: async (req, res) => {
    return res.send({ getUsers: true });
  },
};

module.exports = UserServices;
