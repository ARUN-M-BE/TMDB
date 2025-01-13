import React from 'react';
import Banner from './Banner';
import MovieCard from './MovieCard';

function Movies() {
  return (

    <div>
        <Banner />
        <div className='text-lg sm:text-xl text-center items-center font-bold text-black-100 p-2 uppercase'>
          Trending Movies
        </div>

        <div className='flex flex-row space-x-4 justify-center overflow-hidden'>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
        </div>
    </div>
  )
}

export default Movies