import React from 'react'
import logo from '../../public/movie-logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=''>
        

        <nav className='flex items-center p-5 bg-gray-800  border space-x-8 '>
            <img src={logo} alt="" className='w-[50px] h-[50px]' /> 
            <Link to='/' className='font-medium text-2xl text-blue-500'>Movies</Link>
            <Link to='/Watchlist' className='font-medium text-2xl text-blue-500'>Watchlist</Link>
            <Link to='/About' className='font-medium text-2xl text-blue-500'>About</Link>
        </nav>
    </div>
  )
}

export default Navbar