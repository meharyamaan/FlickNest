import React, { useState, useEffect } from "react";
import Filter from "../filter/Filter";
import m1 from "./images/movie1.jpg";
import BG from "./images/m2.jpg";

// Sample data
const seasons = [
  {
    id: 1,
    title: "Season 1",
    rating: 8.5,
    totalSeasons: 5,
    year: 2020,
    genres: ["Action", "Adventure"],
    imageUrl: m1,
    seriesId: 1,
  },
  {
    id: 2,
    title: "Season 2",
    rating: 9.0,
    totalSeasons: 5,
    year: 2021,
    genres: ["Action", "Drama"],
    imageUrl: BG,
    seriesId: 1,
  },
];

const Seasons = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [filteredSeasons, setFilteredSeasons] = useState(seasons);

  const genres = [
    "Action",
    "Action & Adventure",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Kids",
    "Music",
    "Mystery",
    "News",
    "Reality",
    "Romance",
    "Sci-Fi & Fantasy",
    "Science Fiction",
    "Soap",
    "Talk",
    "Thriller",
    "TV Movie",
    "War",
    "War & Politics",
    "Western",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1950 + 1 },
    (_, index) => currentYear - index
  );

  // Apply filters to the seasons list
  useEffect(() => {
    let filtered = seasons.filter((season) =>
      season.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Filter by rating
    if (ratingFilter) {
      filtered = filtered.filter(
        (season) => season.rating === parseInt(ratingFilter)
      );
    }

    // Filter by year
    if (yearFilter) {
      filtered = filtered.filter(
        (season) => season.year === parseInt(yearFilter)
      );
    }

    // Filter by genres
    if (selectedGenres.length > 0) {
      filtered = filtered.filter((season) =>
        selectedGenres.every((genre) => season.genres.includes(genre))
      );
    }

    setFilteredSeasons(filtered);
  }, [searchQuery, ratingFilter, yearFilter, selectedGenres]);

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      {/* Filter Component */}
      <Filter
        genres={genres}
        years={years}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        yearFilter={yearFilter}
        setYearFilter={setYearFilter}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Seasons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {filteredSeasons.length === 0 ? (
          <p className="text-center text-lg text-gray-600 col-span-full">
            No seasons found.
          </p>
        ) : (
          filteredSeasons.map((season) => (
            <div
              key={season.id}
              className="bg-cyan-300 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={season.imageUrl}
                alt={season.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {season.title}
                </h3>
                <p className="text-sm text-gray-600">
                  Rating: {season.rating} | Seasons: {season.totalSeasons} |
                  Year: {season.year}
                </p>
                <p className="text-sm text-gray-600">
                  Genres: {season.genres.join(", ")}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Seasons;
