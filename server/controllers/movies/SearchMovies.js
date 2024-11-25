const Movie = require("../../model/movies");

const searchMovies = async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res
      .status(400)
      .send({ message: "Title query parameter is required" });
  }

  try {
    const movies = await Movie.find({
      title: { $regex: title, $options: "i" }, // Case-insensitive search
    });

    if (movies.length === 0) {
      return res
        .status(404)
        .send({ message: "No movies found with this title" });
    }

    res.status(200).send({ movies });
  } catch (error) {
    res.status(500).send({ message: "Error searching movies", error });
  }
};

module.exports = searchMovies;
