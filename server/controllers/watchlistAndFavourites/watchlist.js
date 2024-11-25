const Watchlist = require("../../model/watchlist");

const addToWatchlist = async (req, res) => {
  const { userId, itemId, itemType } = req.body;

  if (!["Movie", "Series"].includes(itemType)) {
    return res.status(400).json({ message: "Invalid item type" });
  }

  try {
    let userWatchlist = await Watchlist.findOne({ userId });

    if (!userWatchlist) {
      userWatchlist = new Watchlist({
        userId,
        items: [{ _id: itemId }],
        itemsModel: itemType,
      });
    } else {
      if (userWatchlist.items.some((item) => item.toString() === itemId)) {
        return res
          .status(400)
          .json({ message: `${itemType} already in watchlist` });
      }
      userWatchlist.items.push({ _id: itemId });
    }

    await userWatchlist.save();
    // res.status(200).json({ message: "Added to watchlist", userWatchlist });
    res.status(200).json({ message: "Added to watchlist" });
  } catch (error) {
    res.status(500).json({ message: "Error adding to watchlist", error });
  }
};

// Remove movie or series from watchlist
const removeFromWatchlist = async (req, res) => {
  const { userId, itemId, itemType } = req.body;

  if (!["Movie", "Series"].includes(itemType)) {
    return res.status(400).json({ message: "Invalid item type" });
  }

  try {
    const userWatchlist = await Watchlist.findOne({ userId });

    if (!userWatchlist) {
      return res.status(404).json({ message: "Watchlist not found" });
    }

    // Remove the item from watchlist
    userWatchlist.items = userWatchlist.items.filter(
      (item) => item._id.toString() !== itemId
    );

    await userWatchlist.save();
    // res.status(200).json({ message: "Removed from watchlist", userWatchlist });
    res.status(200).json({ message: "Removed from watchlist" });
  } catch (error) {
    res.status(500).json({ message: "Error removing from watchlist", error });
  }
};

// Get all items in the user's watchlist
const getWatchlist = async (req, res) => {
  const { userId } = req.params;

  try {
    const userWatchlist = await Watchlist.findOne({ userId }).populate("items");

    if (!userWatchlist) {
      return res.status(404).json({ message: "Watchlist not found" });
    }

    res
      .status(200)
      .json({ message: "Watchlist retrieved", watchlist: userWatchlist });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving watchlist", error });
  }
};

module.exports = { addToWatchlist, removeFromWatchlist, getWatchlist };
