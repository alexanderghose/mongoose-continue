const { todos } = require('../models/todo');
var Todo = require('../models/todo');

module.exports = {
  index,
  show,
  newTodo: newTodo,
  create,
  submit: submit,
  deleteStuff: deleteStuff,
  update,
};

function update(req,res) {
  let id = req.params.id // from URL
  let incoming_todo = req.body.update_todo
  for (let i = 0; i < Todo.todos.length; i++) {
    if (Todo.todos[i].id == id) {
      Todo.todos[i].todo = incoming_todo;
    }
  }
  res.redirect('/todos')
}

function deleteStuff(req,res) {
  Todo.deleteTodoFromArray(req.params.id)
  res.redirect('/todos') // <-- an address
}

function submit(req,res) {
  console.log("ALL form data:",req.body)
  console.log("just the 'testing' field :",req.body.testing)
  Todo.pushStuffIntoArray(req.body)
  //res.send('thank')
  res.redirect('/')
}

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
