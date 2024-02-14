const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/profile', usersCtrl.showProfile);
router.put('/:id',usersCtrl.updaterole)

router.post('/like-song', ensureLoggedIn, usersCtrl.likeSong);

module.exports = router;
