import React, { useEffect } from "react";
// import moviecard from "../assets/card1.webp";
import genreId from './Gener';

function Watchlist({ watchlist, setWatchlist, handleRemoveWatchList }) {
  const [search, setSearch] = React.useState("");
  const [genrelist, setGenreList] = React.useState(['All genre']);
  const [currGenre, setCurrGenre] = React.useState('All Genre');

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genreId) => {
    setCurrGenre(genreId);
  };

  let sortIncreasing = () => {
    let sortedIncreas = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchlist([...sortedIncreas])
  }

  let sortDecreasing = () => {
    let sortedDecreas = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchlist([...sortedDecreas])
  }

  useEffect(()=>{
    let top = watchlist.map((movieObj)=>{
      return genreId[movieObj.genre_ids[0]]
    })
    top = new Set(top)
    setGenreList(['All Genre', ...top])
  } ,[watchlist])

  return (
    <>
      <div className="flex flex-wrap justify-center m-4 gap-4 font-bold">
        {genrelist.map((genreId)=>{
          return <div onClick={()=> handleFilter( )} className={currGenre==genreId ? "bg-blue-400 w-[9rem] h-[3rem] text-center py-3 rounded-xl hover:cursor-pointer duration-100 transition-transform hover:scale-105" : "bg-blue-200 w-[9rem] h-[3rem] text-center py-3 rounded-xl hover:cursor-pointer duration-100 transition-transform hover:scale-105"}>
          {genreId}
        </div>
        })}
        
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="search"
          className="h-[3rem] w-[90%] md:w-[18rem] bg-gray-200 outline-none p-3 rounded-lg"
          placeholder="Search it"
        />
      </div>

      <div className="rounded-lg overflow-hidden border border-gray-500 m-4 md:m-8">
        <div className="overflow-x-auto">
          <table className="w-full text-center text-sm md:text-base">
            <thead className="border-b-2">
              <tr>
                <th className="border-r-2 px-2 md:px-4">Movie Name</th>
                <th className="border-r-2 px-2 md:px-4 flex justify-center">
                  <div onClick={sortIncreasing} className="p-2 hover:cursor-pointer duration-100 transition-transform"><i className="fa-solid fa-arrow-up"></i></div>
                  <div className="p-2">Rating</div>
                  <div onClick={sortDecreasing} className="p-2 hover:cursor-pointer duration-100 transition-transform"><i className="fa-solid fa-arrow-down"></i></div>
                </th>

                <th className="border-r-2 px-2 md:px-4"> Relased Year</th>
                <th className="border-r-2 px-2 md:px-4">Genre</th>
                <th className="px-2 md:px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.filter((movieObj)=>{
                if (currGenre=='All Genre'){
                  return true
                }else {
                  return genreId[movieObj.genre_ids[0]]==currGenre;
                }
              }).filter((movieObj) => {
                  return movieObj.title
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase());
                })
                .map((movieObj) => {
                  return (
                    <tr className="border-b-2">
                      <td className="border-r-2">
                        <div className="flex flex-col md:flex-row items-center px-4 py-2">
                          <img
                            src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                            alt="moviecard"
                            className="w-[150px] h-[80px] md:w-[200px] md:h-[100px] object-fit rounded"
                          />
                          <div className="ml-0 md:ml-4 mt-2 md:mt-0">
                            {movieObj.title}
                          </div>
                        </div>
                      </td>
                      <td className="border-r-2 p-2 md:p-4">
                        <div>{movieObj.vote_average}</div>
                      </td>
                      <td className="border-r-2 p-2 md:p-4">
                        <div>{movieObj.release_date}</div>
                      </td>
                      <td className="border-r-2 p-2 md:p-4">
                        <div>{genreId[movieObj.genre_ids[0]]}</div>
                      </td>
                      <td className="p-2 md:p-4">
                        <button
                          onClick={()=>handleRemoveWatchList(movieObj)}
                          className="text-red-800 px-2 py-1 md:px-4 md:py-2 bg-gray-300 rounded-lg font-semibold hover:bg-red-800 hover:text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Watchlist;
