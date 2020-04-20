const conn = require('../database/conn');
const jwt = require('../helpers/api/jwt');
const User = require('../models/User');

const UserServices = {
  createUser: async (req, res) => {
    try {
      const {
        email,
      } = req.body;

      await conn('users')
        .where({ email })
        .first()
        .then((user) => {
          if (user) {
            return res.status(422).send({
              message: 'Usuário já existe',
            });
          }
        });

      const UserModel = await User.create(req.body);

      await conn('users')
        .insert(UserModel)
        .then(() => {
          return res.send({
            token: jwt.generator({
              uuid: UserModel.uuid,
            }),
          });
        });
    } catch (error) {
      return res.status(500).send();
    }
  },

  getUsers: async (req, res) => {
    return res.send({ getUsers: true });
  },
};

module.exports = UserServices;
