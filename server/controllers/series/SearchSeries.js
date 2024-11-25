const Series = require("../../model/searies");

const searchSeries = async (req, res) => {
  const { title, genres, rating, status } = req.query;

  try {
    const searchCriteria = {};

    if (title) {
      searchCriteria.title = { $regex: title, $options: "i" };
    }

    if (genres) {
      searchCriteria.genres = { $in: genres.split(",") };
    }

    if (rating) {
      searchCriteria.rating = { $gte: Number(rating) };
    }

    if (status) {
      searchCriteria.status = status;
    }

    const foundSeries = await Series.find(searchCriteria);

    if (foundSeries.length === 0) {
      return res
        .status(404)
        .send({ message: "No series found matching the search criteria" });
    }

    res.status(200).send({
      message: "Series found successfully",
      series: foundSeries,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error searching for series",
      error: error.message,
    });
  }
};

module.exports = searchSeries;
