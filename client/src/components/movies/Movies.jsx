import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BG from "./images/bg.png";
import m1 from "./images/movie1.jpg";
import m2 from "./images/m2.jpg";
import m3 from "./images/m4.jpg";

const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    duration: "148 min",
    imageUrl: BG,
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    duration: "152 min",
    imageUrl: m1,
  },
  {
    id: 3,
    title: "The Matrix",
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
    imageUrl: BG,
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    genre: "Drama",
    duration: "142 min", // Added duration
    imageUrl: m2,
  },
];

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(15);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  // Handle page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-cyan-50 py-8 px-4">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-6 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full px-4 py-2 text-gray-800 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              className="bg-cyan-300 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-48 object-cover"
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
