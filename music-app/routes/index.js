var express = require('express')
const passport = require('passport')
var router = express.Router()

router.get('/', function (req, res, next) {
  if (req.user && req.user.firstlog) {
    res.render('usertype')
  } else {
    res.redirect('/albums')
  }
})
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  })
)

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/')
  })
})

module.exports = router
