const Series = require("../../model/searies");

const AddSeries = async (req, res) => {
  try {
    const {
      title,
      series_id,
      season_no,
      episode_count,
      episodes,
      poster,
      description,
      genres,
      rating,
      cast,
      directors,
      writers,
      status,
      releaseDate,
    } = req.body;

    // Check if required fields are provided
    if (
      !title ||
      !description ||
      rating === undefined ||
      !series_id ||
      !poster
    ) {
      return res.status(400).send({
        message:
          "Title, description, rating, series_id, and poster are required",
      });
    }

    const existingSeries = await Series.findOne({
      $or: [{ title }, { series_id }],
    });

    if (existingSeries) {
      return res
        .status(409)
        .send({ message: "Series with this title or ID already exists" });
    }

    const newSeries = new Series({
      title,
      series_id,
      season_no,
      episode_count,
      episodes,
      poster,
      description,
      genres,
      rating,
      cast,
      directors,
      writers,
      status,
      releaseDate,
    });

    await newSeries.save();

    res.status(201).json({
      message: "Series added successfully!",
      series: newSeries,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to add the series.",
      error: error.message,
    });
  }
};

module.exports = AddSeries;
