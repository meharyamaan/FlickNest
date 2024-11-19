import React from "react";
import m1 from "./images/movie1.jpg";
import { useParams } from "react-router-dom";
import {
  FaFilm,
  FaStar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTv,
} from "react-icons/fa";

const seasonData = {
  title: "Stranger Things",
  shortStoryline:
    "A group of kids uncover a series of supernatural mysteries while trying to find their missing friend.",
  genre: "Sci-Fi, Horror, Drama",
  rating: "8.7/10",
  country: "USA",
  releaseDate: "2016-07-15",
  totalSeasons: 4,
  totalEpisodes: 34,
  episodesPerSeason: [8, 9, 8, 9],
  platforms: ["Netflix", "Amazon Prime", "Hulu"],
  imageUrl: m1,
};

const SeasonsDetail = () => {
  const { seasonId } = useParams();
  const season = seasonData;
  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto p-6 bg-cyan-200 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {season.title}
        </h1>

        {/* Grid for Season Image and Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Season Image */}
          <div className="flex justify-center mb-6 md:mb-0">
            <img
              src={season.imageUrl}
              alt={season.title}
              className="rounded-lg shadow-md w-72 h-auto object-cover transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Season Information */}
          <div className="space-y-6">
            {/* Short Storyline */}
            <div className="bg-gray-100 p-4 rounded-xl shadow-md">
              <p className="text-lg font-semibold text-gray-700 mb-2">
                Short Storyline
              </p>
              <p className="text-gray-600 text-sm">{season.shortStoryline}</p>
            </div>

            {/* Genre */}
            <div className="bg-gray-100 p-4 rounded-xl shadow-md">
              <div className="flex items-center space-x-2">
                <FaFilm className="text-gray-700" size={20} />
                <p className="text-lg font-semibold text-gray-700">Genre</p>
              </div>
              <p className="text-gray-600 text-sm">{season.genre}</p>
            </div>

            {/* Rating */}
            <div className="bg-gray-100 p-4 rounded-xl shadow-md">
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-400" size={20} />
                <p className="text-lg font-semibold text-gray-700">Rating</p>
              </div>
              <p className="text-gray-600 text-sm">{season.rating}</p>
            </div>
          </div>
        </div>

        {/* Grid for Season Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Total Seasons */}
          <div className="bg-gray-100 p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-2">
              <FaFilm className="text-gray-700" size={20} />
              <p className="text-lg font-semibold text-gray-700">
                Total Seasons
              </p>
            </div>
            <p className="text-gray-600 text-sm">{season.totalSeasons}</p>
          </div>

          {/* Total Episodes */}
          <div className="bg-gray-100 p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-2">
              <FaFilm className="text-gray-700" size={20} />
              <p className="text-lg font-semibold text-gray-700">
                Total Episodes
              </p>
            </div>
            <p className="text-gray-600 text-sm">{season.totalEpisodes}</p>
          </div>

          {/* Episodes per Season */}
          <div className="bg-gray-100 p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-2">
              <FaFilm className="text-gray-700" size={20} />
              <p className="text-lg font-semibold text-gray-700">
                Episodes per Season
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              {season.episodesPerSeason.join(", ")}
            </p>
          </div>
        </div>

        {/* Country and Release Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Country */}
          <div className="bg-gray-100 p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-700" size={20} />
              <p className="text-lg font-semibold text-gray-700">Country</p>
            </div>
            <p className="text-gray-600 text-sm">{season.country}</p>
          </div>

          {/* Release Date */}
          <div className="bg-gray-100 p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-gray-700" size={20} />
              <p className="text-lg font-semibold text-gray-700">
                Release Date
              </p>
            </div>
            <p className="text-gray-600 text-sm">{season.releaseDate}</p>
          </div>
        </div>

        {/* Platforms */}
        <div className="bg-gray-100 p-4 rounded-xl shadow-md mt-6">
          <div className="flex items-center space-x-2">
            <FaTv className="text-gray-700" size={20} />
            <p className="text-lg font-semibold text-gray-700">Available On</p>
          </div>
          <p className="text-gray-600 text-sm">{season.platforms.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default SeasonsDetail;
