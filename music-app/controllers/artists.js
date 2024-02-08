const Artist = require('../models/artist')
const Alubum = require('../models/album')

async function newArtist(req, res) {
  //Sort performers by their name
  const artists = await artist.find({}).sort('name')
  res.render('artists/new', { title: 'Add Artist', artists })
}

async function create(req, res) {
  try {
    await Artist.create(req.body)
  } catch (err) {
    console.log(err)
  }
  res.redirect('/artists/new')
}

const addToCast = async (req, res) => {
  try {
    //find the movie that I want to add the performers to
    const album = await Album.findById(req.params.id)
    //added the id of the performer I selected to the cast field on the movie document
    album.cast.push(req.body.performerId)
    //save the changes made to the movie
    await album.save()
    //redirect to the show page for the movie
    res.redirect(`/albums/${album._id}`)
  } catch (error) {
    console.log(error)
    res.redirect('/albums')
  }
}

module.exports = {
  new: newArtist,
  create,
  addToCast
}
