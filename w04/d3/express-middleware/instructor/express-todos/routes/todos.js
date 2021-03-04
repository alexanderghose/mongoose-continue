var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);

// router.get('/new', function(req,res) {
//     res.render('todos/new.ejs')
// })
router.post('/', todosCtrl.create)
router.get('/new', todosCtrl.newTodo)
router.get('/:id', todosCtrl.show);

module.exports = router;
