const express = require('express');
const { check } = require('express-validator');

const UserServices = require('../services/UserServices');

const {
  SchemaValidation
} = require('../models/User');

const passwordSchemas = {
  min: SchemaValidation.password.min,
  max: SchemaValidation.password.max,
};

const router = express.Router();

router.post('/', [
  check('first_name').notEmpty().withMessage('Value is required'),
  check('last_name').notEmpty().withMessage('Value is required'),
  check('email').isEmail().withMessage('E-mail must be valid'),
  check('password').isLength(passwordSchemas).withMessage('Password must be at least 8 chars and less than 16 chars'),
], UserServices.createUser);

router.get('/auth', [
  check('email').isEmail().withMessage('E-mail must be valid'),
  check('password').isLength(passwordSchemas).withMessage('Password must be at least 8 chars and less than 16 chars'),
], UserServices.authUser);

module.exports = router;
