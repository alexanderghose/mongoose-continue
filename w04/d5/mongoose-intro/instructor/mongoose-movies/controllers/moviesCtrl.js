let MovieModel = require('../models/movieModel.js')

async function create(req,res) {
    console.log(req.body)
    let nowShowingValue = "on"
    if (req.body.nowShowing == 'on') {
        nowShowingValue = true
    } else {
        nowShowingValue = false
    }
    // let movie = new Movie({
        // title : req.body.title
    // })
    // let movie = new Movie(req.body)
    // movie.save()
    await MovieModel.create({
        title: req.body.title,
        releaseYear: req.body.releaseYear,
        mpaaRating: req.body.mpaaRating,
        cast: req.body.cast.split(','),
        nowShowing: nowShowingValue,
    })
    res.redirect('/') // redirect the user back to localhost:300/
}

function newMovie(req,res) {
    //res.send('here is your form:')
    res.render('movies/new.ejs')
}

module.exports = {
    newMovie: newMovie,
    create,
}