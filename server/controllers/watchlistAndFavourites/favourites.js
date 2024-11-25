const Favorites = require("../../model/favourites");

// Add movie or series to favorites
const addToFavorites = async (req, res) => {
  const { userId, itemId, itemType } = req.body;

  if (!["Movie", "Series"].includes(itemType)) {
    return res.status(400).json({ message: "Invalid item type" });
  }

  try {
    let userFavorites = await Favorites.findOne({ userId });

    if (!userFavorites) {
      // If no favorites, create a new one
      userFavorites = new Favorites({
        userId,
        items: [{ _id: itemId }],
        itemsModel: itemType,
      });
    } else {
      // Check if the item is already in the favorites
      if (userFavorites.items.some((item) => item.toString() === itemId)) {
        return res
          .status(400)
          .json({ message: `${itemType} already in favorites` });
      }
      userFavorites.items.push({ _id: itemId });
    }

    await userFavorites.save();
    // res.status(200).json({ message: "Added to favorites", userFavorites });
    res.status(200).json({ message: "Added to favorites" });
  } catch (error) {
    res.status(500).json({ message: "Error adding to favorites", error });
  }
};
///////////////////////////////////////////
// Remove movie or series from favorites
const removeFromFavorites = async (req, res) => {
  const { userId, itemId, itemType } = req.body;

  if (!["Movie", "Series"].includes(itemType)) {
    return res.status(400).json({ message: "Invalid item type" });
  }

  try {
    const userFavorites = await Favorites.findOne({ userId });

    if (!userFavorites) {
      return res.status(404).json({ message: "Favorites not found" });
    }

    // Remove the item from favorites
    userFavorites.items = userFavorites.items.filter(
      (item) => item._id.toString() !== itemId
    );

    await userFavorites.save();
    // res.status(200).json({ message: "Removed from favorites", userFavorites });
    res.status(200).json({ message: "Removed from favorites" });
  } catch (error) {
    res.status(500).json({ message: "Error removing from favorites", error });
  }
};

/////////////////////////////
// Get all items in the user's favorites
const getFavorites = async (req, res) => {
  const { userId } = req.params;

  try {
    const userFavorites = await Favorites.findOne({ userId }).populate("items");

    if (!userFavorites) {
      return res.status(404).json({ message: "Favorites not found" });
    }

    res
      .status(200)
      .json({ message: "Favorites retrieved", favorites: userFavorites });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving favorites", error });
  }
};

module.exports = { addToFavorites, removeFromFavorites, getFavorites };
