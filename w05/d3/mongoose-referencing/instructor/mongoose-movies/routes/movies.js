const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');
let performersCtrl = require('../controllers/performers')

router.get('/', moviesCtrl.index); // view all movies
router.get('/new', moviesCtrl.new); // view addmovie form
router.get('/:id', moviesCtrl.show); // view a single movie
router.post('/', moviesCtrl.create); // handle submit addmovie form

// MOVIES/123021938098/performers
router.post('/:id/performers', performersCtrl.addToCast);

module.exports = router;
