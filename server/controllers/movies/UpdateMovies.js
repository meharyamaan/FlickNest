const Movie = require("../../model/movies");

const updateMovie = async (req, res) => {
  const { movieId } = req.params;
  const {
    title,
    description,
    poster,
    genres,
    rating,
    duration,
    releaseDate,
    cast,
    director,
    writers,
    status,
    movieCode,
  } = req.body;

  if (!movieId) {
    return res.status(400).send({ message: "Movie ID is required" });
  }

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      movieId,
      {
        title,
        description,
        poster,
        genres,
        rating,
        duration,
        releaseDate,
        cast,
        director,
        writers,
        status,
        movieCode,
        updatedAt: Date.now(), // Update the `updatedAt` field
      },
      { new: true } //To Return the updated movie
    );

    if (!updatedMovie) {
      return res.status(404).send({ message: "Movie not found" });
    }

    res
      .status(200)
      .send({ message: "Movie updated successfully", movie: updatedMovie });
  } catch (error) {
    res.status(500).send({ message: "Error updating movie", error });
  }
};

module.exports = updateMovie;
