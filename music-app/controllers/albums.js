const Album = require('../models/album');
const Artist = require('../models/artist');

const index = async (req, res) => {
    const albums = await Album.find({});
    res.render('albums/index', { title: 'All Albums', albums });
}

const show = async (req, res) => {
}

const newAlbum = async (req, res) => {
//     const album = await Album.findById(req.params.id).populate('artist');
//     const artists = await Artist.find({});
//     const albumArtist = album.artist;
//     //create a new array of just the names from the albumArtist
//     const artistsNames = albumArtist.map((artistsMembers) => artistsMembers.name);
   
//     const availableArtists = artists.filter((artist)=> {
//     console.log(typeof artist._id)
//     if(!artistsNames.includes(artist.name)) {
//       return artist;
//     }
//   })
    res.render('albums/new', { title: 'Add Album' });
}

const create = async (req, res) => {

}

module.exports = {
    index,
    show,
    new: newAlbum,
    create
  };