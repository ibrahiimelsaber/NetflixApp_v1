const mongoose = require("mongoose");

let Movie = mongoose.model("Movie", {
  name: { type: String },
  rating: { type: Number },
  category: { type: String },
  star: { type: String },
  duration: { type: Number },
  image: { type: String },
});

module.exports = { Movie };
