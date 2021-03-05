const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    // our movie will have an array of actors
    cast: [String], 
    nowShowing: Boolean,
})

module.exports = mongoose.model('Movie', movieSchema)