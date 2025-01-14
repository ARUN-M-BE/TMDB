import React from "react";
import Carddemo from "../../public/card1.webp";

function MovieCard() {
  return (
    <div className=" flex flex-col justify-between p-4">
      
      <div
        className="h-[30vh] sm:h-[40vh] w-[90vw] sm:w-[200px] bg-cover flex items-end rounded-xl hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
        style={{ backgroundImage: `url(${Carddemo})` }}
      >
       
        <div className="flex w-full justify-center bg-black bg-opacity-50 flex-col rounded-b-xl">
          <h1 className="text-lg sm:text-xl font-bold text-white p-2 text-center">
          Wicked
          </h1>
        </div>
      </div>

      
    </div>
  );
}

export default MovieCard;
