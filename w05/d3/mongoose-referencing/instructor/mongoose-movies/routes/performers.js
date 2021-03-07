const express = require('express');
const router = express.Router();
const performersCtrl = require('../controllers/performers');

router.get('/performers/new', performersCtrl.new); // GET addactor form
router.post('/performers', performersCtrl.create); //

module.exports = router;