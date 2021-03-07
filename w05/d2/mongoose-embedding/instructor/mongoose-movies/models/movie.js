const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reviewSchema = new Schema({ // an embedded schema: no need model
  content: String,
  rating: Number,
})
const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  }, mpaaRating: String,
  cast: [String],
  reviews: [reviewSchema], // establishing 1 movie has many reviews
  nowShowing: { type: Boolean, default: false }
}, {
  timestamps: true
});
module.exports = mongoose.model('Movie', movieSchema);