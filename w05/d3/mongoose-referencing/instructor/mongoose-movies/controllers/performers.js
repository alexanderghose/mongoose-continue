const Performer = require('../models/performer');
const Movie = require('../models/movie');

function addToCast(req, res) {
  // step 1. lookup the movie that we're adding some cast to
  Movie.findById(req.params.id, function(err, movie) {
    // step 2. retrieve the performerID from the req.body (form data)
    movie.cast.push(req.body.performerId);
    // step 3. push the performerID into the cast[] array
    movie.save(function(err) {
      res.redirect(`/movies/${movie._id}`);
    });
  });
}

module.exports = {
  new: newPerformer,
  create,
  addToCast
};

function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  const s = req.body.born;
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
  Performer.create(req.body, function (err, performer) {
    res.redirect('/performers/new');
  });
}

function newPerformer(req, res) {
  Performer.find({}, function (err, performers) {
    res.render('performers/new', {
      title: 'Add Performer',
      performers
    });
  })
}