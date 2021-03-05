var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);
router.put('/:id', todosCtrl.update)
router.post('/', todosCtrl.create)
router.get('/new', todosCtrl.newTodo)
router.get('/:id', todosCtrl.show);
router.post('/test', todosCtrl.submit) // <-- in reality this is /todos/test
router.delete('/:id', todosCtrl.deleteStuff) // handle delete req


module.exports = router;
