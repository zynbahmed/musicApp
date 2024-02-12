const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/profile', usersCtrl.showProfile);

module.exports = router;
