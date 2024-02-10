const express = require('express');
const router = express.Router();
const songsCtrl = require('../controllers/songs');

router.post('/albums/:id/songs', songsCtrl.create);

module.exports = router;