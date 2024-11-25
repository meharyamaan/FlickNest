const mongoose = require("mongoose");

// Define the Series Schema
const seriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  series_id: {
    type: String,
    required: true,
    unique: true,
  },
  season_no: {
    type: Number,
    required: true,
  },
  episode_count: {
    type: Number,
    required: true,
  },
  episodes: [
    {
      type: String,
    },
  ],
  poster: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genres: [
    {
      type: String,
    },
  ],
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  cast: [
    {
      type: String,
    },
  ],
  directors: [
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
    required: true,
    default: "upcoming",
  },
  releaseDate: {
    type: Date,
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

const Series = mongoose.model("Series", seriesSchema);

module.exports = Series;
