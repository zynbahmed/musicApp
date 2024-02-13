const User = require('../models/user');
const Album =require('../models/album');
const showProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    res.render('users/profile', { title: 'User Profile', user });
  } catch (error) {
    console.error(error);
    res.redirect('/users/profile');
  }
};

const likeSong = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const songId = req.body.songId;
    const action = req.body.action;
    console.log("req.body",req.body)
    console.log("songId",songId)
    // console.log('Received songId:', songId);
    // console.log('Action:', action);
    const song= await Album.findOne({ 'songs._id': songId }, { 'songs.$': 1 }).populate('songs')
    if (!user.likedSongs.includes(song.songs[0].name)){
    console.log("song",song.songs[0].name)
    user.likedSongs.push(song.songs[0].name)
    await user.save()}
    else {
      console.log('you add this before')
    }
  } catch (error) {
    console.error(error);
  }
  res.redirect('/users/profile')

  


    // if (action === 'add') {
    //   // Check if the song with the specified songId exists
    //   const songExists = await Song.findById(songId);

    //   if (songExists) {
    //     // Check if the song is not already in likedSongs array
    //     const isSongLiked = user.likedSongs.some(song => song.equals(songId));
    //     if (!isSongLiked) {
    //       user.likedSongs.push(songId);
    //       await user.save();
    //     }
    //   } else {
    //     console.error('Song does not exist:', songId);
    //     // Handle the case where the song does not exist
    //   }
    // } else if (action === 'remove') {
    //   // Remove the song from the likedSongs array
    //   user.likedSongs = user.likedSongs.filter(song => !song.equals(songId));
    //   await user.save();
    // }


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
