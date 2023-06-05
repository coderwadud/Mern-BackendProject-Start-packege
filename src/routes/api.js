const express = require('express');
const { registration } = require('../controllers/usersControllers');

const router = express.Router();

router.get('/', registration)

module.exports = router;