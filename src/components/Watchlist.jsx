import React from 'react';
import moviecard from '../assets/card1.webp';

function Watchlist() {
  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center m-4 gap-4 font-bold">
        <div className="bg-blue-400 w-[9rem] h-[3rem] text-center py-3 rounded-xl hover:cursor-pointer duration-100 transition-transform hover:scale-105">
          All Movies
        </div>
        <div className="bg-blue-200 w-[9rem] h-[3rem] text-center py-3 rounded-xl hover:cursor-pointer duration-100 transition-transform hover:scale-105">
          Animation
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center my-4">
        <input
          type="search"
          className="h-[3rem] w-[90%] md:w-[18rem] bg-gray-200 outline-none p-3 rounded-lg"
          placeholder="Search it"
        />
      </div>

      {/* Movie Table */}
      <div className="rounded-lg overflow-hidden border border-gray-500 m-4 md:m-8">
        <div className="overflow-x-auto">
          <table className="w-full text-center text-sm md:text-base">
            <thead className="border-b-2">
              <tr>
                <th className="border-r-2 px-2 md:px-4">Movie Name</th>
                <th className="border-r-2 px-2 md:px-4">Rating</th>
                <th className="border-r-2 px-2 md:px-4">Year</th>
                <th className="border-r-2 px-2 md:px-4">Genre</th>
                <th className="px-2 md:px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b-2'>
                <td className="border-r-2">
                  <div className="flex flex-col md:flex-row items-center px-4 py-2">
                    <img
                      src={moviecard}
                      alt="moviecard"
                      className="w-[150px] h-[80px] md:w-[200px] md:h-[100px] object-fit rounded"
                    />
                    <div className="ml-0 md:ml-4 mt-2 md:mt-0">Movie Name</div>
                  </div>
                </td>
                <td className="border-r-2 p-2 md:p-4">
                  <div>Rating</div>
                </td>
                <td className="border-r-2 p-2 md:p-4">
                  <div>dd-mm-yyyy</div>
                </td>
                <td className="border-r-2 p-2 md:p-4">
                  <div>Genre</div>
                </td>
                <td className="p-2 md:p-4">
                  <button className="text-red-800 px-2 py-1 md:px-4 md:py-2 bg-gray-300 rounded-lg font-semibold hover:bg-red-800 hover:text-white">
                    Delete
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Watchlist;
