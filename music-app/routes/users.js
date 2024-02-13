const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/profile', usersCtrl.showProfile);

router.post('/like-song', usersCtrl.likeSong);

module.exports = router;
