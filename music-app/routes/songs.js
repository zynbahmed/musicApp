const express = require('express');
const router = express.Router();
const songsCtrl = require('../controllers/songs');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/albums/:id/songs', ensureLoggedIn, songsCtrl.create);

module.exports = router;