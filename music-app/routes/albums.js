var express = require('express')
var router = express.Router()
const albumsCtrl = require('../controllers/albums')

router.get('/', albumsCtrl.index)

router.get('/new', albumsCtrl.newAlbum)

router.get('/:id', albumsCtrl.show)

router.get('/artists/:artistId/albums', albumsCtrl.albumsByArtist)

router.post('/', albumsCtrl.create)

router.get('/:id/edit', albumsCtrl.editAlbum)

router.put('/:id', albumsCtrl.updateAlbum)

router.delete('/:id', albumsCtrl.deleteAlbum)

module.exports = router
