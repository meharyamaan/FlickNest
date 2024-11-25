const mongoose = require("mongoose");

const filterSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  filterName: {
    type: String,
    required: true,
  },
  criteria: {
    genres: [String],
    releaseYear: {
      from: { type: Number },
      to: { type: Number },
    },
    actors: [String],
    directors: [String],
    rating: {
      from: { type: Number, min: 0, max: 10 },
      to: { type: Number, min: 0, max: 10 },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Filter", filterSchema);
