import React, { useEffect } from "react";
import Banner from "./Banner";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagenation from "./Pagenation";

function Movies({ handleAddWatchList, handleRemoveWatchList, watchlist }) {
  const [movies, setMovies] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=026742c0cb24d10234fab1c2fe497205&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [pageNo]);
  return (
    <>
      <div>
        <Banner />
      </div>
      
      <div className="text-lg sm:text-xl text-center items-center font-bold text-black-100 p-6 mt-4 uppercase">
        Trending Movies
      </div>
      <div className="p-12 m-12 mt-2 mb-2">
        <div className="flex flex-row flex-wrap justify-around gap-8">
          {movies.map((movieObj) => {
            return (
              <MovieCard
                key={movieObj.id}
                movieObj={movieObj}
                poster_path={movieObj.poster_path}
                name={movieObj.original_title}
                handleAddWatchList={handleAddWatchList}
                handleRemoveWatchList={handleRemoveWatchList}
                watchlist={watchlist}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Pagenation
          pageNo={pageNo}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </>
  );
}

export default Movies;
