import React from "react";
import Carddemo from "../../public/carddemo.jpg";

function MovieCard() {
  return (
    <div className="p-4 flex flex-col items-center space-y-4">
      
      <div
        className="h-[30vh] sm:h-[40vh] w-[90vw] sm:w-[200px] bg-cover flex items-end rounded-xl hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
        style={{ backgroundImage: `url(${Carddemo})` }}
      >
       
        <div className="flex w-full justify-center bg-black bg-opacity-50 flex-col rounded-b-xl">
          <h1 className="text-lg sm:text-xl font-bold text-white p-2 text-center">
            Avengers
          </h1>
        </div>
      </div>

      
    </div>
  );
}

export default MovieCard;
