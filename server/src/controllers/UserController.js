const { celebrate, Segments, Joi } = require('celebrate');
const express = require('express');
const UserServices = require('../services/UserServices');

const router = express.Router();

router.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required(),
  }),
}), UserServices.createUser);

router.get('/', UserServices.getUsers);

module.exports = router;
