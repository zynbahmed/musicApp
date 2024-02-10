const Album = require('../models/album');
const Artist = require('../models/artist');

const index = async (req, res) => {
    const albums = await Album.find({});
    res.render('albums/index', { title: 'All Albums', albums });
}

const show = async (req, res) => {
    const album = await Album.findById(req.params.id);
    res.render('albums/show', { title: 'Album Detail', album });
}

const newAlbum = async (req, res) => {
    // const artists = await Artist.findById(req.params.id).populate('name');
    // const artists = await Artist.find({ _id: { $nin: album.artist } }).sort('name');

    // const albumArtist = album.artist;
    //create a new array of just the names from the albumArtist
    // const artistsNames = albumArtist.map((artistsMembers) => artistsMembers.name);
   
//     const availableArtists = artists.filter((artist)=> {
//     console.log(typeof artist._id)
//     if(!artistsNames.includes(artist.name)) {
//       return artist;
//     }
//   })
    res.render('albums/new', { title: 'Add Album' });
}

const create = async (req, res) => {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        await Album.create(req.body);
        res.redirect('/albums');  
    } catch (err) {
        console.log(err);
        res.render('albums/new', { errorMsg: err.message });
    }
}

module.exports = {
    index,
    show,
    newAlbum,
    create
  };