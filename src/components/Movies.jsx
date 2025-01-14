import React, { useEffect } from 'react';
import Banner from './Banner';
import MovieCard from './MovieCard';
import axios from 'axios';

function Movies() {


  const [Movies, setMovies] = React.useState([])
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=026742c0cb24d10234fab1c2fe497205&language=en-US&page=1')
    .then((response) => {
      setMovies(response.data.results)
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

        <div className='flex flex-row flex-wrap justify-around'>

          {Movies.map((MovieObj) => {
            return <MovieCard />
          })}

        </div>
    </div>
  )
}

export default Movies