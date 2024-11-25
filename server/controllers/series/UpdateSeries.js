const Series = require("../../model/searies");

const updateSeries = async (req, res) => {
  const { series_id } = req.params;
  const {
    title,
    description,
    poster,
    genres,
    rating,
    season_no,
    episode_count,
    episodes,
    cast,
    directors,
    writers,
    status,
    releaseDate,
  } = req.body;

  if (!series_id) {
    return res.status(400).send({ message: "Series ID is required" });
  }

  try {
    const updatedSeries = await Series.findOneAndUpdate(
      { series_id },
      {
        title,
        description,
        poster,
        genres,
        rating,
        season_no,
        episode_count,
        episodes,
        cast,
        directors,
        writers,
        status,
        releaseDate,
        updatedAt: Date.now(),
      },
      { new: true }
    );
    if (!updatedSeries) {
      return res.status(404).send({ message: "Series not found" });
    }

    res.status(200).send({
      message: "Series updated successfully",
      series: updatedSeries,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error updating series",
      error: error.message,
    });
  }
};

module.exports = updateSeries;
