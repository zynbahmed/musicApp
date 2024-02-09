const Album = require('../models/album');
const Artist = require('../models/artist');

const index = async (req, res) => {
    const albums = await Album.find({});
    res.render('albums/index', { title: 'All Albums', albums });
}

const show = async (req, res) => {
}

const newAlbum = (req, res) => {

}

const create = async (req, res) => {

}

module.exports = {
    index,
    show,
    new: newAlbum,
    create
  };