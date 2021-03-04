var Todo = require('../models/todo');

module.exports = {
  index,
  show,
  newTodo: newTodo,
  create,
};

function create(req,res) {
  console.log(req.body); // req.body CONTAINS 
  //Todo.addFormDataToDB(req.body)
  Todo.todos.push({
    id: Date.now() % 1000000,
    todo: req.body.todo,
    done: false,
  })
  res.redirect('/todos')
}

function newTodo(req,res) {
  res.render('todos/new.ejs')
}

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll()
  });
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    // Would like to display the number of the todo within the list
    todoNum: Todo.getAll().findIndex(todo => todo.id === parseInt(req.params.id)) + 1
  });
}
