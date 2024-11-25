const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "itemsModel",
      },
    ],
    itemsModel: {
      type: String,
      required: true,
      enum: ["Movie", "Series"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Favorites", favoritesSchema);
