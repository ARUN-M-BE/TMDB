import React from "react";
// import Carddemo from "../../public/card1.webp";

function MovieCard({ poster_path, name }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="h-[50vh] sm:h-[300px] w-[50vw] sm:w-[200px] bg-cover flex flex-col justify-between rounded-xl hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        <div className="m-4 self-end flex items-center justify-center h-8 w-8 bg-white bg-opacity-90 rounded-full shadow-lg">
          {/* &#128525; */}
          {/* <i class="fa-solid fa-heart" style={{color: `#ff0000`,}}></i> */}
          <i class="fa-regular fa-heart" style={{color: `#ff0000`,}}></i>
        </div>

        <div className="flex w-full justify-center bg-black bg-opacity-50 rounded-b-xl">
          <h1 className="text-lg sm:text-xl font-bold text-white p-2 text-center">
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
