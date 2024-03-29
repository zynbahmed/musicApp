const Artist = require('../models/artist')
const Album = require('../models/album')

async function newArtist(req, res) {
  const artists = await Artist.find({}).sort('name')
  res.render('artists/new', { title: 'Add Artist', artists })
}

async function createArtist(req, res) {
  try {
    await Artist.create(req.body)
  } catch (err) {
    console.log(err)
  }
  res.redirect('/artists/new')
}

const addToArtist = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id)
    album.artist = req.body.artist
    await album.save()
    res.redirect(`/albums/${album._id}`)
  } catch (error) {
    console.log(error)
    res.redirect('/albums')
  }
}
const index = async (req, res) => {
  const artists = await Artist.find({}).sort('name')
  res.render('artists/index', { title: 'All Artists', artists })
}

module.exports = {
  newArtist,
  createArtist,
  addToArtist,
  index
}
