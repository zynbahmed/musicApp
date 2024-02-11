const Album = require('../models/album');
const Artist = require('../models/artist');
const Review =require('../models/review');

const index = async (req, res) => {
    const albums = await Album.find({});
    res.render('albums/index', { title: 'All Albums', albums });
}

const show = async (req, res) => {
    const album = await Album.findById(req.params.id).populate('reviews');
    res.render('albums/show', { title: 'Album Detail', album });
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