const express = require('express')
const router = express.Router();
let moviesCtrl = require('../controllers/moviesCtrl.js')

router.get('/new', moviesCtrl.newMovie)
router.post('/', moviesCtrl.create) 

module.exports = router;