const express = require('express');
const UserServices = require('../services/UserServices');

const router = express.Router();

router.post('/', UserServices.createUser);
router.get('/', UserServices.getUsers);

module.exports = router;
