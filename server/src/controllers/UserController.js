const express = require('express');
const UserServices = require('../services/UserServices');
const validator = require('../middlewares/validator');
const User = require('../models/User');

const router = express.Router();

router.post('/', validator(User.validations), UserServices.createUser);

router.get('/', UserServices.getUsers);

module.exports = router;
