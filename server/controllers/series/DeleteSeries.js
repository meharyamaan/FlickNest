const Series = require("../../model/searies");

const deleteSeries = async (req, res) => {
  const { series_id } = req.params;

  if (!series_id) {
    return res.status(400).send({ message: "Series ID is required" });
  }

  try {
    const deletedSeries = await Series.findOneAndDelete({ series_id });

    if (!deletedSeries) {
      return res.status(404).send({ message: "Series not found" });
    }

    res.status(200).send({
      message: "Series deleted successfully",
      series: deletedSeries,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error deleting series",
      error: error.message,
    });
  }
};

module.exports = deleteSeries;
