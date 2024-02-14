var express = require('express')
var router = express.Router()
const albumsCtrl = require('../controllers/albums')
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', albumsCtrl.index)

router.get('/new', ensureLoggedIn, albumsCtrl.newAlbum)

router.get('/:id', albumsCtrl.show)

router.get('/artists/:artistId/albums', albumsCtrl.albumsByArtist)

router.post('/', ensureLoggedIn, albumsCtrl.create)

router.get('/:id/edit', ensureLoggedIn, albumsCtrl.editAlbum)

router.put('/:id', ensureLoggedIn, albumsCtrl.updateAlbum)

router.delete('/:id', ensureLoggedIn, albumsCtrl.deleteAlbum)

module.exports = router
