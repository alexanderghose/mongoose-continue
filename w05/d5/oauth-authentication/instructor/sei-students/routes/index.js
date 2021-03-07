var router = require('express').Router();
let passport = require('passport')

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/students');
});

// this is a route that, when your user hits it,
// you're redirecting the user to the google consent screen
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/students',
    failureRedirect : '/students'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/students');
});

module.exports = router;