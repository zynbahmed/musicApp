const User = require('../models/user');

const showProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    res.render('users/profile', { title: 'User Profile', user });
  } catch (error) {
    console.error(error);
    res.redirect('/');
  }
};

const likeSong = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const songId = req.body.songId;

    // Check if the song is already in likedSongs array
    const isSongLiked = user.likedSongs.some(song => song.equals(songId));

    if (!isSongLiked) {
      user.likedSongs.push(songId);
      await user.save();
    }

  } catch (error) {
    console.error(error);
  }

  res.redirect('/users/profile');
};

const updaterole =async (req,res) => {
  try {
  const user = await User.findById(req.params.id)
  user.role=req.body.role
  user.firstlog = false
  await user.save()
  res.redirect('/albums')
  }catch (error){
    console.error(error);
    res.redirect('/');
  }
  
}
module.exports = {
  showProfile,
  likeSong,
  updaterole
};
