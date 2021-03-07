const MovieModel = require("../models/movie")

async function create(req,res) {
    //req.body <-- contains the incoming form data
    //req.params.id <-- contains the :id that was sent from the form

    // step 1. get the movie (eg., pokemon)
    let target_movie = await MovieModel.findById(req.params.id);
    // step 2. get the incoming review data (eg., "this movie sucks")
    //         from req.body
    // step 3. push the incoming review into the array of reviews
    target_movie.reviews.push({ content: req.body.content,
                                rating: req.body.rating})
    // step 4. you will need to "save" the parent document
    await target_movie.save();
    res.redirect('/movies')
}

module.exports = {
    create,
}