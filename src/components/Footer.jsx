import React from "react";
import logo from "../assets/movie-logo.png";

function Footer() {
  return (
    <>
      <div className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 lg:px-8 ">
          <div className=" flex flex-wrap justify-center items-start space-x-12 gap-12">
            <div className="col-6 mb-6 text-center ">
              <img
                src={logo}
                alt="IMDb Logo"
                className="mx-auto w-[120px] mb-4"
              />
              <p className="text-sm text-gray-400">
                Your guide to movies, TV shows, celebrities, and more.
              </p>
            </div>

            <div className="col-3 mb-6 text-center">
              <h3 className="text-gray-200 text-xl font-semibold mb-4">
                Movies
              </h3>
              <ul className="space-y-2 text-gray-400 text-lg text-start">
                <li className="hover:text-white cursor-pointer">Top Movies</li>
                <li className="hover:text-white cursor-pointer">In Theaters</li>
                <li className="hover:text-white cursor-pointer">Coming Soon</li>
                <li className="hover:text-white cursor-pointer">Movie News</li>
              </ul>
            </div>

            <div className="col-3 mb-6 text-center">
              <h3 className="text-gray-200 text-xl font-semibold mb-4">
                Follow Us
              </h3>
              <ul className="space-y-2 text-lg text-start">
                <li>
                  <a
                    href="https://codepen.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fab fa-codepen mr-2"></i>Codepen
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fab fa-instagram mr-2"></i>Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fab fa-github mr-2"></i>Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fab fa-linkedin mr-2"></i>LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} TMDB-REACT. All rights reserved.
          </p>
          <p className="mt-2">
            Powered by{" "}
            <a
              href="https://arunm.pages.dev"
              className="text-blue-500 hover:underline"
            >
              Arun M
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
