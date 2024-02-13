const Album = require('../models/album');
const User = require('../models/user');

const create = async (req, res) => {
  const album = await Album.findById(req.params.id);
  album.songs.push(req.body);

  try {
    await album.save();

    const user = await User.findById(req.user._id);
    const isSongLiked = user.likedSongs.some(song => song.equals(album.songs[album.songs.length - 1]._id));

    if (!isSongLiked) {
      user.likedSongs.push(album.songs[album.songs.length - 1]);
      await user.save();
    }

  } catch (err) {
    console.log(err);
  }
  
  res.redirect(`/albums/${album._id}`);
}

const songLyrics = async () => {
const songLyricsLink = "https://api.lyrics.ovh/v1/artist/title"
try {
  const album= await Album.findById(req.params.id).populate('artist')
const artistName = album.artist.name


}catch (error){

}
} 


module.exports = {
  create,
  songLyrics
};
