import './App.css';
import About from './components/About';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Watchlist from './components/Watchlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

// 026742c0cb24d10234fab1c2fe497205
// https://api.themoviedb.org/3/movie/popular?api_key=026742c0cb24d10234fab1c2fe497205&language=en-US&page=2

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>

          <Route path='/' element={<Movies />} />
          <Route path='/Watchlist' element={<Watchlist />} />
          <Route path='/About' element={<About />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App