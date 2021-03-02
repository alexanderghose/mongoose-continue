var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/:albumid', // imagine controlelrs file:
// function newSkill(req,res) {
//   console.log(req.params.albumid)
  
// })


let studentsModel = require('../models/students.js')

router.get('/students', function(req,res) {
  //res.send('this is the list of students:')
  res.render('alex.ejs', {
    students: studentsModel.students
  })
})

module.exports = router;
