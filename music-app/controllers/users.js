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

module.exports = {
  showProfile
};
