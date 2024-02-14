const User = require('../models/user')
const Album = require('../models/album')
const showProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    res.render('users/profile', { title: 'User Profile', user })
  } catch (error) {
    console.error(error)
    res.redirect('/users/profile')
  }
}

const likeSong = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    const songId = req.body.songId
    const action = req.body.action
    const song = await Album.findOne(
      { 'songs._id': songId },
      { 'songs.$': 1 }
    ).populate('songs')
    const songName = song.songs[0].name
    if (action === 'add') {
      if (!user.likedSongs.includes(songName)) {
        user.likedSongs.push(songName)
        await user.save()
      } else {
      }
    } else if (action === 'remove') {
      user.likedSongs = user.likedSongs.filter(
        (song) => !song.includes(songName)
      )
      await user.save()
    }
  } catch (error) {
    console.error(error)
  }
  res.redirect('/users/profile')
}

const updaterole = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    user.role = req.body.role
    user.firstlog = false
    await user.save()
    res.redirect('/albums')
  } catch (error) {
    console.error(error)
    res.redirect('/')
  }
}
module.exports = {
  showProfile,
  likeSong,
  updaterole
}
