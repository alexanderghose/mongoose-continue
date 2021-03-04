// The ids can be generated using:
// Date.now() % 1000000
const todos = [
  {id: 125223, todo: 'Feed Dogs', done: true},
  {id: 127904, todo: 'Learn Express', done: false},
  {id: 139608, todo: 'Buy Milk', done: false}
];

module.exports = {
  getAll,
  getOne, 
  addFormDataToDB,
  todos,
};

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return todos.find(todo => todo.id === parseInt(id));
}

function addFormDataToDB(incoming_obj) {
  console.log("incoming:",incoming_obj.todo)
  let obj = {
    id: Date.now() % 1000000,
    todo: incoming_obj.todo,
    done: false,
  }
  todos.push(obj)
}

function getAll() {
  return todos;
}