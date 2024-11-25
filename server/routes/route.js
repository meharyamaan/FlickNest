const express = require("express");
const {
  signUp,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/user");

//Movies Routes
const addMovie = require("../controllers/movies/AddMovies");
const deleteMovie = require("../controllers/movies/DeleteMovies");
const updateMovie = require("../controllers/movies/UpdateMovies");
const searchMovies = require("../controllers/movies/SearchMovies");

///////////////Series Routes
const addSeries = require("../controllers/series/AddSeries");
const updateSeries = require("../controllers/series/UpdateSeries");
const deleteSeries = require("../controllers/series/DeleteSeries");
const searchSeries = require("../controllers/series/SearchSeries");

///////////////Watchlist Routes
const {
  addToWatchlist,
  removeFromWatchlist,
  getWatchlist,
} = require("../controllers/watchlistAndFavourites/watchlist");

///////////////Favourites Routes
const {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
} = require("../controllers/watchlistAndFavourites/favourites");

///////////////Filter Routes
const { filterItems } = require("../controllers/filter");

const router = express.Router();

///////////////Filter Routes
router.get("/filter", filterItems);

///////////////////User Routes///////
router.post("/signup", signUp);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword);

///////////////////Movies Routes///////
router.post("/movies/add", addMovie);
router.delete("/movies/delete/:movieId", deleteMovie);
router.put("/movies/update/:movieId", updateMovie);
router.get("/movies/search", searchMovies);

///////////////////Series Routes///////
router.post("/series/add", addSeries);
router.put("/series/update/:series_id", updateSeries);
router.delete("/series/delete/:series_id", deleteSeries);
router.get("/series/search", searchSeries);

///////////////////WatchList Routes///////
router.post("/watchlist/add", addToWatchlist);
router.post("/watchlist/remove", removeFromWatchlist);
router.get("/watchlist/:userId", getWatchlist);

///////////////////Favourites Routes///////
router.post("/favourites/add", addToFavorites);
router.post("/favourites/remove", removeFromFavorites);
router.get("/favourites/:userId", getFavorites);

module.exports = router;
