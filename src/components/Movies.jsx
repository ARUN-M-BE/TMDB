import React, { useEffect } from 'react';
import Banner from './Banner';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagenation from './Pagenation';

function Movies() {


  const [movies, setMovies] = React.useState([])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=026742c0cb24d10234fab1c2fe497205&language=en-US&page=1`)
    .then((res) => {
      setMovies(res.data.results)
      console.log(res.data.results)
    })
    .catch((error) => {
      console.error('Error fetching data', error)
    })
  }
  , [])
  return (

    <div>
        <Banner />
        <div className='text-lg sm:text-xl text-center items-center font-bold text-black-100 p-2 uppercase'>
          Trending Movies
        </div>

        <div className='flex flex-row flex-wrap justify-around px-10 gap-5'>

          {movies.map((movieObj) => {
            return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
          })}

        </div>

        <Pagenation />
    </div>
  )
}

export default Movies