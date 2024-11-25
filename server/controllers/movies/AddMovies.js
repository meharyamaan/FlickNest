const Movie = require("../../model/movies");

const addMovie = async (req, res) => {
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

  if (!title || !description || rating === undefined) {
    return res
      .status(400)
      .send({ message: "Title, description, and rating are required" });
  }

  try {
    const existingMovie = await Movie.findOne({
      $or: [{ title }, { movieCode }],
    });
    if (existingMovie) {
      return res
        .status(409)
        .send({ message: "Movie with this title or code already exists" });
    }

    const newMovie = new Movie({
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
    });

    await newMovie.save();
    res
      .status(201)
      .send({ message: "Movie added successfully", movie: newMovie });
  } catch (error) {
    res.status(500).send({ message: "Error adding movie", error });
  }
};

module.exports = addMovie;
