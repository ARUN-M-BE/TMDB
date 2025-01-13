import React, { useState } from "react"; // Import useState
import logo from "../../public/movie-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="navbar flex items-center p-5 bg-gray-800 ">
        <img
          src={logo}
          alt="Logo"
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] shadow-lg shadow-cyan-500/50"
        />

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-6 ms-5">
          <Link
            to="/"
            className="font-medium text-lg md:text-2xl text-blue-500 not-italic hover:italic"
          >
            Movies
          </Link>
          <Link
            to="/Watchlist"
            className="font-medium text-lg md:text-2xl text-blue-500 not-italic hover:italic"
          >
            Watchlist
          </Link>
          <Link
            to="/About"
            className="font-medium text-lg md:text-2xl text-blue-500 not-italic hover:italic"
          >
            About
          </Link>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden ml-auto">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-start bg-gray-700 p-4 space-y-4 md:hidden">
          <Link
            to="/"
            className="font-medium text-lg text-blue-500 not-italic hover:italic"
          >
            Movies
          </Link>
          <Link
            to="/Watchlist"
            className="font-medium text-lg text-blue-500 not-italic hover:italic"
          >
            Watchlist
          </Link>
          <Link
            to="/About"
            className="font-medium text-lg text-blue-500 not-italic hover:italic"
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
