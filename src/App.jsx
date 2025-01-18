import './App.css';
import About from './components/About';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Watchlist from './components/Watchlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { useState } from 'react';

// 026742c0cb24d10234fab1c2fe497205
// https://api.themoviedb.org/3/movie/popular?api_key=026742c0cb24d10234fab1c2fe497205&language=en-US&page=2

function App() {

  let [watchlist, setWatchlist] = useState([]);

  let handleAddWatchList = ( movieObj ) => {
    let newWatchlist= [...watchlist, movieObj];
    setWatchlist(newWatchlist);
    console.log(newWatchlist);

  }

  let handleRemoveWatchList = ( movieObj ) => {
    let newWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchlist(newWatchlist);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>

          <Route path='/' element={<Movies watchlist={watchlist} handleAddWatchList={handleAddWatchList} handleRemoveWatchList={handleRemoveWatchList} />} />
          <Route path='/Watchlist' element={<Watchlist />} />
          <Route path='/About' element={<About />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;