var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/test', function(req,res) {
  res.send('it"s working')
})

let albums = [
  {id: "1", name: "cardi b"},
  {id: "2", name: "chuck berry"},
]

// "index page"
app.get('/albums', function(req,res) {
  res.render('albums.ejs', {albums:albums})
})

// show page
app.get('/albums/:albumid', function(req,res) {
  console.log(req.params)
  for (let a of albums) {
    if (a.id === req.params.albumid) {
      res.render('show.ejs', {album:a})
      return; // <-- if the incoming id matches one of the albums, return out of this function ASAP
    }
  }
  res.send('there was an error processing your request') // if we get here, it means the for loop failed to match the incoming id with our array's ids
})

// search a database
// app.get('/album/:albumid', function(req,res) {
//   console.log(req.params)
//   for (let a of albums) {
//     if (a.id === req.params.albumid) {
//       res.send("this album is " + a.name)
//     }
//   }
//   res.send('the album you requested wasnt found')
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
