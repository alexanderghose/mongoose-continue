// importing express
let express = require('express')

// express boilerplate
let app = express();

app.set('view engine', 'ejs') // app.set lets us set settings in express

// our first "route handler"
app.get('/cars', function(req,res) {
    res.send('we dont got no cars')
})

let randomNum = 0
app.get('/home', function(req,res) {
    randomNum = Math.floor(Math.random() * Math.floor(10));
    res.render('home.ejs', {
        randomNum: randomNum,
        age: 50,
        name: "alex"
    }) // this is the ejs file we're responding with
})

// this is a fake database of TODOS
let todos = [
    {todo: "Feed Dogs", done: "true"},
    {todo: "Learn Express", done: "false"},
    {todo: "Buy Milk", done: "false"}
]
app.get('/todos', function(req,res) {
    res.render('index.ejs', {todos: todos})
})


app.listen(3000, function() {
    console.log("i'm listening now. this is my job")
    console.log('Listening on port 3000')
})