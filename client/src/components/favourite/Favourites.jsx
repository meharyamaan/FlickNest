import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // For navigation between pages

// Dummy favourite movie data (replace this with actual data from API or local storage)
const favouriteMovies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi, Action",
    imageUrl: "https://path_to_image.com/inception.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action, Drama",
    imageUrl: "https://path_to_image.com/darkknight.jpg",
  },
  {
    id: 3,
    title: "The Matrix",
    genre: "Sci-Fi, Thriller",
    imageUrl: "https://path_to_image.com/matrix.jpg",
  },
];

const Favourites = () => {
  const [movies, setMovies] = useState(favouriteMovies);

  useEffect(() => {
    // Here you can fetch the actual favourite movies from localStorage, API, etc.
    // Example: setMovies(JSON.parse(localStorage.getItem("favouriteMovies")));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Welcome to Favourites
      </h1>

      {/* Display Favourites */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {movies.length === 0 ? (
          <p className="text-center text-lg text-gray-600 col-span-full">
            No favourite movies added yet.
          </p>
        ) : (
          movies.map((movie) => (
            <Link
              to={`/movies/${movie.id}`} // Link to movie details page
              key={movie.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
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
                <p className="text-sm text-gray-500">{movie.genre}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Favourites;
