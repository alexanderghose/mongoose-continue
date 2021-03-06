let passport = require('passport')
let Student = require('../models/student')

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // step 1. existing user in DB? use Mongoose findOne to lookup
    Student.findOne({ 'googleId': profile.id }, function(err, student) {
      if (err) return cb(err);
      if (student) {
        // step2A: if existing user, this code adds to req.user
        return cb(null, student);
      } else {
        // we have a new student via OAuth!
        var newStudent = new Student({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newStudent.save(function(err) {
          if (err) return cb(err);
          return cb(null, newStudent);
        });
      }
    });
  }
));
passport.serializeUser(function(student, done) {
    done(null, student.id);
});
passport.deserializeUser(function(id, done) {
    Student.findById(id, function(err, student) {
        done(err, student);
    });
});