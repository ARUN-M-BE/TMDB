import './App.css';
import About from './components/About';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Watchlist from './components/Watchlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

      </BrowserRouter>
    </>
  )
}

export default App