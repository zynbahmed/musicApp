const express = require('express')
const router = express.Router()
const artistsCtrl = require('../controllers/artists')
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/artists/new', ensureLoggedIn, artistsCtrl.newArtist)
router.get('/artists', artistsCtrl.index)
router.post('/artists', ensureLoggedIn, artistsCtrl.createArtist)
router.post('/albums/:id', artistsCtrl.addToArtist)

module.exports = router
