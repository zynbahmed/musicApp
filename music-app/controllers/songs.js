const Album = require('../models/album');
const User = require('../models/user');

const create = async (req, res) => {
  const album = await Album.findById(req.params.id);
  album.songs.push(req.body);
  try {
    await album.save();
  } catch (err) {
    console.log(err);
  }res.redirect(`/albums/${album._id}`);
}



module.exports = {
  create,
  
};
