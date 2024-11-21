import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-100 text-gray-800">
      {/* Hero Section */}
      <section className="text-center px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4">
          Welcome to FlickNest!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Your ultimate destination for movies, seasons, and top ratings.
          Explore your favorites, create watchlists, and stay entertained!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-4xl mx-auto">
          <Link
            to="/movies"
            className="bg-cyan-400 text-white px-6 py-3 rounded-md shadow-md hover:bg-cyan-500 transition w-full md:w-auto"
          >
            Explore Movies
          </Link>
          <Link
            to="/seasons"
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-md shadow-md hover:bg-gray-400 transition w-full md:w-auto"
          >
            Explore Seasons
          </Link>
          <div className="relative flex-grow w-full md:w-auto">
            <input
              type="text"
              placeholder="Search for movies or seasons..."
              className="w-full px-4 py-3 text-gray-800 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="absolute right-0 top-0 px-4 py-2 h-full bg-cyan-400 text-white rounded-md hover:bg-cyan-500 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 w-full bg-white py-8 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-cyan-400 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                🎥
              </div>
              <h3 className="text-xl font-bold mb-2">Movies</h3>
              <p className="text-gray-600">
                Discover a vast library of movies from every genre and era.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-400 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                📺
              </div>
              <h3 className="text-xl font-bold mb-2">Seasons</h3>
              <p className="text-gray-600">
                Stay up-to-date with your favorite TV shows and series.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-400 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                ⭐
              </div>
              <h3 className="text-xl font-bold mb-2">Top Ratings</h3>
              <p className="text-gray-600">
                Check out the top-rated content voted by our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
