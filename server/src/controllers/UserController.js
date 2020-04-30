const express = require('express');
const { check } = require('express-validator');

const UserServices = require('../services/UserServices');

const {
  VALUE_REQUIRED,
  EMAIL_VALID,
  PASSWORD_LENGTH,
} = require('../config/constants/errors');

const replaceText = require('../helpers/text/replace-text');

const {
  SchemaValidation
} = require('../models/User');

const passwordSchemas = {
  min: SchemaValidation.password.min,
  max: SchemaValidation.password.max,
};

const router = express.Router();

router.post('/', [
  check('first_name').notEmpty().withMessage(VALUE_REQUIRED),
  check('last_name').notEmpty().withMessage(VALUE_REQUIRED),
  check('email').isEmail().withMessage(EMAIL_VALID),
  check('password').isLength(passwordSchemas).withMessage(replaceText(PASSWORD_LENGTH, passwordSchemas)),
], UserServices.createUser);

router.get('/auth', [
  check('email').isEmail().withMessage(EMAIL_VALID),
  check('password').isLength(passwordSchemas).withMessage(replaceText(PASSWORD_LENGTH, passwordSchemas)),
], UserServices.authUser);

module.exports = router;
