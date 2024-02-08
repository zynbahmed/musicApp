const express = require('express')
const router = express.Router()
const artistsCtrl = require('../controllers/artists')

router.get('/artists/new', artistsCtrl.new)
router.post('/artists', artists.create)
//check cast connection
router.post('/albums/:id/artists', artistsCtrl.addToCast)

module.exports = router
