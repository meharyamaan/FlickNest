const Movie = require("../model/movies");
const Series = require("../model/searies");

const filterItems = async (req, res) => {
  const {
    genres,
    releaseYearFrom,
    releaseYearTo,
    actors,
    directors,
    ratingFrom,
    ratingTo,
    itemType, // "Movie" or "Series"
  } = req.query;

  let filter = {};

  if (genres) {
    const genreArray = genres.split(",").map((genre) => genre.trim());
    filter.genres = { $in: genreArray.map((genre) => new RegExp(genre, "i")) };
  }

  //  releaseYear range
  if (releaseYearFrom || releaseYearTo) {
    filter.releaseYear = {};
    if (releaseYearFrom) filter.releaseYear.$gte = parseInt(releaseYearFrom);
    if (releaseYearTo) filter.releaseYear.$lte = parseInt(releaseYearTo);
  }

  //  actors
  if (actors) {
    filter.cast = { $in: actors.split(",").map((actor) => actor.trim()) }; // Trimming spaces
  }

  // directors
  if (directors) {
    filter.directors = {
      $in: directors.split(",").map((director) => director.trim()),
    };
  }

  // rating range
  if (ratingFrom || ratingTo) {
    filter.rating = {};
    if (ratingFrom) filter.rating.$gte = parseFloat(ratingFrom);
    if (ratingTo) filter.rating.$lte = parseFloat(ratingTo);
  }

  try {
    let results;

    //  itemType filtering
    if (itemType === "Movie") {
      results = await Movie.find(filter);
    } else if (itemType === "Series") {
      results = await Series.find(filter);
    } else {
      return res
        .status(400)
        .json({ message: "Invalid item type. Use 'Movie' or 'Series'." });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "No results found matching the filter criteria.",
        results,
      });
    }

    res.status(200).json({
      message: "Search results retrieved successfully",
      results,
    });
  } catch (error) {
    res.status(500).json({ message: "Error searching items", error });
  }
};

module.exports = { filterItems };
