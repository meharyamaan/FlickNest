import React from "react";
import { useParams } from "react-router-dom"; // To get the movie id from the URL
import m1 from "./images/m2.jpg"; // Placeholder image
import {
  FaFilm,
  FaStar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTv,
} from "react-icons/fa"; // Icons for visual enhancement

const MovieDetails = () => {
  // Sample data (In a real project, this data would come from an API or state)
  const { movieId } = useParams(); // Get the movie id from URL
  const movie = {
    title: "Inception",
    shortStoryline:
      "A thief who enters the dreams of others to steal secrets from their subconscious is given the task of planting an idea into a CEO's mind.",
    genre: "Action, Adventure, Sci-Fi",
    casts: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    length: "148 minutes",
    rating: "8.8/10",
    country: "USA",
    releaseDate: "2010-07-16",
    platforms: ["Netflix", "Amazon Prime", "Hulu"], // Added platforms
  };

  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto p-6 bg-cyan-200 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {movie.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Movie Image */}
          <div className="flex justify-center mb-6 md:mb-0">
            <img
              src={m1}
              alt={movie.title}
              className="rounded-lg shadow-md w-72 h-auto object-cover transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Movie Information */}
          <div className="space-y-6">
            {/* Short Storyline */}
            <div className="bg-gray-100 p-4 rounded-xl shadow-md">
              <p className="text-lg font-semibold text-gray-700 mb-2">
                Short Storyline
              </p>
              <p className="text-gray-600 text-sm">{movie.shortStoryline}</p>
            </div>

            {/* Genre */}
            <div className="bg-gray-100 p-4 rounded-xl shadow-md">
              <div className="flex items-center space-x-2">
                <FaFilm className="text-gray-700" size={20} />
                <p className="text-lg font-semibold text-gray-700">Genre</p>
              </div>
              <p className="text-gray-600 text-sm">{movie.genre}</p>
            </div>

            {/* Casts */}
            <div className="bg-gray-100 p-4 rounded-xl shadow-md">
              <div className="flex items-center space-x-2">
                <FaFilm className="text-gray-700" size={20} />
                <p className="text-lg font-semibold text-gray-700">Casts</p>
              </div>
              <p className="text-gray-600 text-sm">{movie.casts.join(", ")}</p>
            </div>

            {/* Length */}
            <div className="bg-gray-100 p-4 rounded-xl shadow-md">
              <div className="flex items-center space-x-2">
                <FaFilm className="text-gray-700" size={20} />
                <p className="text-lg font-semibold text-gray-700">Length</p>
              </div>
              <p className="text-gray-600 text-sm">{movie.length}</p>
            </div>
          </div>
        </div>

        {/* Movie Details in separate sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Rating */}
          <div className="bg-gray-100 p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-2">
              <FaStar className="text-yellow-400" size={20} />
              <p className="text-lg font-semibold text-gray-700">Rating</p>
            </div>
            <p className="text-gray-600 text-sm">{movie.rating}</p>
          </div>

          {/* Country */}
          <div className="bg-gray-100 p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-700" size={20} />
              <p className="text-lg font-semibold text-gray-700">Country</p>
            </div>
            <p className="text-gray-600 text-sm">{movie.country}</p>
          </div>

          {/* Release Date */}
          <div className="bg-gray-100 p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-gray-700" size={20} />
              <p className="text-lg font-semibold text-gray-700">
                Release Date
              </p>
            </div>
            <p className="text-gray-600 text-sm">{movie.releaseDate}</p>
          </div>
        </div>

        {/* Platforms */}
        <div className="bg-gray-100 p-4 rounded-xl shadow-md mt-6">
          <div className="flex items-center space-x-2">
            <FaTv className="text-gray-700" size={20} />
            <p className="text-lg font-semibold text-gray-700">Available On</p>
          </div>
          <p className="text-gray-600 text-sm">{movie.platforms.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
