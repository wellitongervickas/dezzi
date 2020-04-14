const uuid = require('uuid').v1;
const bcrypt = require('bcryptjs');
const conn = require('../database/conn');

const UserServices = {
  createUser: async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
      } = req.body;

      const hashPass = await bcrypt.hash(password, 10);

      await conn('users').insert({
        first_name,
        last_name,
        email,
        password: hashPass,
        uuid: uuid(),
      });

      return res.send({ createUser: true });
    } catch (err) {
      console.log(err);
      return res.status(500).send();
    }
  },

  getUsers: async (req, res) => {
    return res.send({ getUsers: true });
  },
};

module.exports = UserServices;
