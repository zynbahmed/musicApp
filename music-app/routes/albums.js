var express = require('express');
var router = express.Router();
const albumsCtrl = require('../controllers/albums')

// GET /albums
router.get('/', albumsCtrl.index)

// GET /albums/new
router.get('/new', albumsCtrl.newAlbum)

// GET /albums/:id (show functionality) MUST be below new route
router.get('/:id', albumsCtrl.show)

router.get('/artists/:artistId/albums', albumsCtrl.albumsByArtist);

// POST /albums
router.post('/', albumsCtrl.create);

// GET /albums/:id/edit
router.get('/:id/edit', albumsCtrl.editAlbum);

// PUT /albums/:id
router.put('/:id', albumsCtrl.updateAlbum);

// DELETE /albums/:id
router.delete('/:id', albumsCtrl.deleteAlbum);


module.exports = router;
