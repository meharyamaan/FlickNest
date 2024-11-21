const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
  },
  genres: [
    {
      type: String,
    },
  ],
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  duration: {
    type: Number,
  },
  releaseDate: {
    type: Date,
  },
  cast: [
    {
      type: String,
    },
  ],
  director: [
    {
      type: String,
    },
  ],
  writers: [
    {
      type: String,
    },
  ],
  status: {
    type: String,
    enum: ["released", "upcoming"],
    default: "upcoming",
  },
  movieCode: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Movie", moviesSchema);
