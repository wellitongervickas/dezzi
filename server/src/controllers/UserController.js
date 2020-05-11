const express = require('express');

const UserServices = require('../services/UserServices');
const schemasValidations = require('../helpers/schemas/validations');

const router = express.Router();

router.post('/', [
  ...schemasValidations.getBodySchemas([
    'first_name',
    'last_name',
    'email',
    'password',
  ]),
], UserServices.createUser);

router.get('/auth', [
  ...schemasValidations.getBodySchemas([
    'email',
    'password',
  ]),
], UserServices.authUser);

module.exports = router;
