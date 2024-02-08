const express = require('express')
const router = express.Router()
const artistsCtrl = require('../controllers/artists')

router.get('/artists/new', artistsCtrl.new)
router.post('/artists', artistsCtrl.createArtist)
router.post('/albums/:id/artists', artistsCtrl.addToArtist)

module.exports = router
