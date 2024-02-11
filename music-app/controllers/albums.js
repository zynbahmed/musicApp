const Album = require('../models/album');
const Artist = require('../models/artist');
const Review = require('../models/review');

const index = async (req, res) => {
    const albums = await Album.find({}).populate('artist', 'name');
    console.log(albums)
    res.render('albums/index', { title: 'All Albums', albums });
}

const show = async (req, res) => {
    const album = await Album.findById(req.params.id)
      .populate('artist')
      .populate('reviews');
    const allrating = album.reviews.map(review => review.rating)
    const sum = allrating.reduce((accumulator, val) => {
        return accumulator + val;
    }, 0);
    const averageRating= Math.round(sum/allrating.length) 

    res.render('albums/show', { title: 'Album Detail', album ,averageRating });
}

const newAlbum = async (req, res) => {
    const artists = await Artist.find();
    res.render('albums/new', { title: 'Add Album', artists });
}

const create = async (req, res) => {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const album = await Album.create(req.body);
        console.log(album)
        res.redirect('/albums');  
    } catch (err) {
        console.log(err);
        res.render('albums/new', { errorMsg: err.message });
    }
}

const albumsByArtist = async (req, res) => {
    try {
      const artistId = req.params.artistId;
      const artist = await Artist.findById(artistId);
      const albums = await Album.find({ artist: artistId }).populate('artist');
      
      res.render('albums/albumsByArtist', { title: `Albums by ${artist.name}`, albums });
    } catch (error) {
      console.error(error);
      res.redirect('/'); // Redirect to a relevant page in case of an error
    }
  };

  const editAlbum = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id).populate('artist');
        const artists = await Artist.find();
        res.render('albums/edit', { title: 'Edit Album', album, artists });
    } catch (error) {
        console.error(error);
        res.redirect('/albums'); // Redirect to a relevant page in case of an error
    }
}

const updateAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect(`/albums/${album._id}`);
    } catch (error) {
        console.error(error);
        res.redirect(`/albums/${req.params.id}/edit`);
    }
}

const deleteAlbum = async (req, res) => {
  try {
      await Album.findByIdAndDelete(req.params.id);
      res.redirect('/albums');
  } catch (error) {
      console.error(error);
      res.redirect(`/albums/${req.params.id}`);
  }
}

module.exports = {
    index,
    show,
    newAlbum,
    create,
    albumsByArtist,
    editAlbum,
    updateAlbum,
    deleteAlbum
  };