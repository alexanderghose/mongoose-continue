const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');
let reviewsCtrl = require('../controllers/reviews')

router.get('/', moviesCtrl.index);
router.get('/new', moviesCtrl.new);
router.get('/:id', moviesCtrl.show);
router.post('/', moviesCtrl.create);

// our form action is POSTing to "movies/<%= movie._id %>/reviews"
// so we must have a route that is like this:
router.post('/:id/reviews', reviewsCtrl.create)


module.exports = router;
