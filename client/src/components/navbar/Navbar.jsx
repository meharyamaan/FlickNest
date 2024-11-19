import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHeart, FaTimes, FaBars, FaListAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path) => {
    location.pathname === path ? "font-bold text-blue-400" : "";
  };

  return (
    <nav className="bg-cyan-400 w-full fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`text-white text-2xl lg:text-3xl font-bold ${
            isMenuOpen ? "hidden md:block" : ""
          }`}
        >
          <Link to="/">FlickNest</Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* {isMenuOpen ? "Close" : "Menu"} */}
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className={`text-white font-semibold hover:text-cyan-200 transition duration-200 ${isActiveLink(
                "/"
              )}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className={`text-white font-semibold hover:text-cyan-200 transition duration-200 ${isActiveLink(
                "/movies"
              )}`}
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/seasons"
              className={`text-white font-semibold hover:text-cyan-200 transition duration-200 ${isActiveLink(
                "/seasons"
              )}`}
            >
              Seasons
            </Link>
          </li>
          <li>
            <Link
              to="/ratings"
              className="text-white font-semibold hover:text-cyan-200 transition duration-200"
            >
              Top Ratings
            </Link>
          </li>
        </ul>

        {/* Icons and SignUp/Login */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/favourites"
            className={`text-white hover:text-cyan-200 ${isActiveLink(
              "/favourites"
            )}`}
          >
            <FaHeart size={24} />
          </Link>
          <Link
            to="/watchlist"
            className={`text-white hover:text-cyan-200 ${isActiveLink(
              "/watchlist"
            )}`}
          >
            <FaListAlt size={24} />
          </Link>
          <button className="bg-white text-cyan-400 font-semibold py-2 px-4 rounded-xl hover:bg-cyan-50 transition duration-200">
            SignUp/Login
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="bg-cyan-500 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="/"
                className={`text-white font-semibold hover:text-cyan-200 transition duration-200 ${isActiveLink(
                  "/"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/movies"
                className={`text-white font-semibold hover:text-cyan-200 transition duration-200 ${isActiveLink(
                  "/movies"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="/seasons"
                className={`text-white font-semibold hover:text-cyan-200 transition duration-200 ${isActiveLink(
                  "/seasons"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Seasons
              </Link>
            </li>
            <li>
              <Link
                to="/ratings"
                className="text-white font-semibold hover:text-cyan-200 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Top Ratings
              </Link>
            </li>
            <li>
              <Link
                to="/favourites"
                className={`text-white hover:text-cyan-200 ${isActiveLink(
                  "/favourites"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHeart size={20} className="inline mr-2" />
                Favourites
              </Link>
            </li>
            <li>
              <Link
                to="/watchlist"
                className={`text-white hover:text-cyan-200 ${isActiveLink(
                  "/watchlist"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaListAlt size={20} className="inline mr-2" />
                Watchlist
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
