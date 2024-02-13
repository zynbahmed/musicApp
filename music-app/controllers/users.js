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
    const action = req.body.action;

    // console.log('Received songId:', songId);
    // console.log('Action:', action);

    if (action === 'add') {
      // Check if the song with the specified songId exists
      const songExists = await Song.findById(songId);

      if (songExists) {
        // Check if the song is not already in likedSongs array
        const isSongLiked = user.likedSongs.some(song => song.equals(songId));
        if (!isSongLiked) {
          user.likedSongs.push(songId);
          await user.save();
        }
      } else {
        console.error('Song does not exist:', songId);
        // Handle the case where the song does not exist
      }
    } else if (action === 'remove') {
      // Remove the song from the likedSongs array
      user.likedSongs = user.likedSongs.filter(song => !song.equals(songId));
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
