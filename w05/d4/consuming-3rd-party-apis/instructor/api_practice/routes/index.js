var express = require('express');
var router = express.Router();

// import request lib which allows our server
// to send GET and POST requests to API's
const requestLib = require('request');
let token = process.env.GITHUB_TOKEN

// this route is for when user submits form (hits "GO")
router.post('/', function(req,res) {
  let username = req.body.username

  let options = {
    url: "https://api.github.com/users/"+username,
    headers: {
      'User-Agent': 'alexanderghose',
      'Authorization': 'token '+token
    }
  }
  requestLib(options, function(err, response, body) {
    // "body" is what we get back from the github API
    // It is a JSON string. Use JSON.parse() to convert
    // it into an object because then our EJS file
    // can access the contents of the JSON
    let userData = JSON.parse(body)
    res.render('index.ejs', {userData})
  })
})
// this route is for when user GETs our webpage
router.get('/', function(req, res, next) {
  res.render('index.ejs', {userData:''})
});
module.exports = router;
