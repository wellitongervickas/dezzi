const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const conn = require('../database/conn');
const User = require('../models/User');

const jwt = require('../helpers/api/jwt');

const {
  USER_INVALID,
  EMAIL_ALREADY_EXISTS,
} = require('../config/constants/errors');

const {
  errorsParse,
} = require('../helpers/api/response');


const UserServices = {
  /**
   * @name AuthUser
   *
   * @param {string} email user email
   * @param {string} password user password
   *
   * @public
   */

  authUser: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json(errorsParse(errors.array()));
      }

      const {
        email,
        password,
      } = req.body;

      const user = await UserServices.findUserByEmail(email);
      const validUser = await bcrypt.compare(password, user && user.password || '');

      if (!user || !validUser) {
        return res.status(404).json(errorsParse([{
          msg: USER_INVALID,
          param: 'email',
          in: 'body'
        }, {
          msg: USER_INVALID,
          param: 'password',
          in: 'body'
        }]));
      }

      return res.json({
        token: jwt.generator({
          uuid: user.uuid,
        }),
      });
    } catch (error) {
      return res.status(500).send();
    }
  },

  /**
   * @name findUserByUUID
   * @param {string} uuid user uuid
   *
   * @public
   */

  findUserByUUID: async uuid => await conn('users').where({ uuid }).first(),

  /**
   * @name findUserByEmail
   * @param {string} email user email
   *
   * @public
   */

  findUserByEmail: async email => await conn('users').where({ email }).first(),

  /**
   * @name createUser
   *
   * @param {string} first_name user first name
   * @param {string} last_name user last namel
   * @param {string} email user email
   * @param {string} password user password
   *
   * @public
   */

  createUser: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json(errorsParse(errors.array()));
      }

      await UserServices
        .findUserByEmail(req.body.email)
        .then((user) => user && res.status(422).json(errorsParse([{
          msg: EMAIL_ALREADY_EXISTS,
          param: 'email',
          location: 'body',
        }])));

      const UserModel = await User.create(req.body);

      await conn('users')
        .insert(UserModel)
        .then(() => {
          return res.json({
            token: jwt.generator({
              uuid: UserModel.uuid,
            }),
          });
        });
    } catch (error) {
      return res.status(500).send();
    }
  },
};

module.exports = UserServices;
