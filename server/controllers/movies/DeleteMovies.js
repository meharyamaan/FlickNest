const Movie = require("../../model/movies");

const deleteMovie = async (req, res) => {
  const { movieId } = req.params;

  if (!movieId) {
    return res.status(400).send({ message: "Movie ID is required" });
  }

  try {
    const movie = await Movie.findByIdAndDelete(movieId);

    if (!movie) {
      return res.status(404).send({ message: "Movie not found" });
    }

    res.status(200).send({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting movie", error });
  }
};

module.exports = deleteMovie;
