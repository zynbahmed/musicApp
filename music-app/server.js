var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const fileUpload = require('express-fileupload')

var indexRouter = require('./routes/index')
var albumsRouter = require('./routes/albums')
const artistsRouter = require('./routes/artists')
const songsRouter = require('./routes/songs')
const reviewRouter = require('./routes/reviews')
const axios = require('axios');

const usersRouter = require('./routes/users')

var app = express()
require('dotenv').config()
require('./config/database')
require('./config/passport');
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(fileUpload())
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});


app.use('/', indexRouter)
app.use('/albums', albumsRouter)
app.use('/', require('./routes/posts'))
app.use('/',artistsRouter)
app.use('/',songsRouter)
app.use('/',reviewRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})


module.exports = app
