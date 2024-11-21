import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // For favorites
import { BsBookmarkFill, BsBookmark } from "react-icons/bs"; // For watchlist

import m1 from "./images/movie1.jpg";
import m2 from "./images/m2.jpg";
import m3 from "./images/m4.jpg";

const movies = [
  {
    id: 1,
    title: "Ek Tha Yaman",
    genre: "Sci-Fi",
    duration: "148 min",
    imageUrl: m3,
  },
  {
    id: 2,
    title: "Cheema Group",
    genre: "Action",
    duration: "152 min",
    imageUrl: m1,
  },
  {
    id: 3,
    title: "A Mistake ft. Asfand",
    genre: "Sci-Fi",
    duration: "136 min",
    imageUrl: m2,
  },
  {
    id: 4,
    title: "The Godfather",
    genre: "Crime",
    duration: "175 min",
    imageUrl: m3,
  },
  {
    id: 5,
    title: "Pulp Fiction",
    genre: "Drama",
    duration: "154 min",
    imageUrl: m2,
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    genre: "Drama",
    duration: "142 min",
    imageUrl: m2,
  },
];

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(15);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const toggleFavorite = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(movieId)
        ? prevFavorites.filter((id) => id !== movieId)
        : [...prevFavorites, movieId]
    );
  };

  const toggleWatchlist = (movieId) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.includes(movieId)
        ? prevWatchlist.filter((id) => id !== movieId)
        : [...prevWatchlist, movieId]
    );
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-cyan-50 py-8 px-4">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-6 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full px-4 py-2 text-gray-800 bg-cyan-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {currentMovies.length === 0 ? (
          <p className="text-center text-lg text-gray-600 col-span-full">
            No movies found.
          </p>
        ) : (
          currentMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative bg-cyan-300 shadow-lg rounded-lg overflow-hidden"
            >
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {movie.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {movie.genre} | {movie.duration}
                  </p>
                </div>
              </Link>
              {/* Favorite Icon */}
              <button
                className="absolute top-2 left-2 text-xl text-cyan-400 bg-white rounded-full p-2 shadow-md hover:text-cyan-400 transition"
                onClick={() => toggleFavorite(movie.id)}
              >
                {favorites.includes(movie.id) ? (
                  <AiFillHeart />
                ) : (
                  <AiOutlineHeart />
                )}
              </button>
              {/* Watchlist Icon */}
              <button
                className="absolute top-2 right-2 text-xl text-yellow-500 bg-white rounded-full p-2 shadow-md hover:text-yellow-600 transition"
                onClick={() => toggleWatchlist(movie.id)}
              >
                {watchlist.includes(movie.id) ? (
                  <BsBookmarkFill />
                ) : (
                  <BsBookmark />
                )}
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-cyan-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-cyan-500 transition"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="mx-4 text-lg text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-cyan-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-cyan-500 transition"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;
