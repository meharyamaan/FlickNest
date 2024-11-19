import React from "react";

const Filter = ({
  genres,
  years,
  ratingFilter,
  setRatingFilter,
  yearFilter,
  setYearFilter,
  selectedGenres,
  setSelectedGenres,
  searchQuery,
  setSearchQuery,
}) => {
  const handleGenreChange = (genre) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((item) => item !== genre)
        : [...prevGenres, genre]
    );
  };

  return (
    <div className="w-full bg-cyan-200 p-6 shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Filters</h2>
      <div className="flex flex-wrap gap-4">
        {/* Rating Filter */}
        <div className="flex items-center space-x-2">
          <label className="font-semibold">Rating</label>
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300"
          >
            <option value="">Select Rating</option>
            {[...Array(10)].map((_, i) => (
              <option value={i + 1} key={i}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Year Filter */}
        <div className="flex items-center space-x-2">
          <label className="font-semibold">Year</label>
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Genre Filter */}
        <div className="flex items-center space-x-2 flex-wrap">
          <label className="font-semibold">Genres</label>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <label key={genre} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={genre}
                  checked={selectedGenres.includes(genre)}
                  onChange={() => handleGenreChange(genre)}
                  className="h-4 w-4 text-cyan-600"
                />
                <span>{genre}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-2 mt-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 text-gray-800 bg-cyan-20 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;
