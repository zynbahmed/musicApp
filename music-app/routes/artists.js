const express = require('express')
const router = express.Router()
const artistsCtrl = require('../controllers/artists')
const albumsCtrl = require('../controllers/albums')

router.get('/artists/new', artistsCtrl.newArtist)
router.get('/artists', artistsCtrl.index)
router.post('/artists', artistsCtrl.createArtist)
///router.get('artists/:id/albums',albumsCtrl.albumsByArtist)
router.post('/albums/:id', artistsCtrl.addToArtist)

module.exports = router
