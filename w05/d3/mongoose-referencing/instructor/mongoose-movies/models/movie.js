const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});

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
  },
  mpaaRating: String,
  nowShowing: { type: Boolean, default: false },
  main_actor: {
    type: Schema.Types.ObjectId,
    ref: "Performer"
  },
  // this is how you implement referencing:
  cast: [{
    type: Schema.Types.ObjectId, // ie., cast is an array of id's
    ref: 'Performer'             // lets us later discover: this id represents which performer?
  }],
  reviews: [reviewSchema] // <-- embedding. 1 to many relationship
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);