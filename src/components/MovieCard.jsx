import React from "react";
// import Carddemo from "../../public/card1.webp";

function MovieCard({poster_path, name}) {
  return (
    <div className="flex flex-col justify-center">
      
      <div
        className="h-[50vh] sm:h-[300px] w-[50vw] sm:w-[200px] bg-cover flex items-end rounded-xl hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}
      >
       
        <div className="flex w-full justify-center bg-black bg-opacity-50 flex-col rounded-b-xl">
          <h1 className="text-lg sm:text-xl font-bold text-white p-2 text-center">
          {name}
          </h1>
        </div>
      </div>

      
    </div>
  );
}

export default MovieCard;
