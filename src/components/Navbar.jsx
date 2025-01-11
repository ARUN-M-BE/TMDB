import React from 'react'
import logo from '../../public/movie-logo.png';
import { Link } from 'react-router-dom';

const Navbar = ()=>  {
  return (
    <div className=''>
        

        <nav className='flex items-center p-5 bg-gray-800 space-x-8 '>
            <img src={logo} alt="" className='w-[50px] h-[50px] shadow-lg shadow-cyan-500/50' /> 
            <Link to='/' className='font-medium text-2xl text-blue-500 not-italic hover:italic'>Movies</Link>
            <Link to='/Watchlist' className='font-medium text-2xl text-blue-500 not-italic hover:italic'>Watchlist</Link>
            <Link to='/About' className='font-medium text-2xl text-blue-500 not-italic hover:italic'>About</Link>
        </nav>


    </div>
  )
}

export default Navbar