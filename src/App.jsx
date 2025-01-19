import "./App.css";
import About from "./components/About";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

// 026742c0cb24d10234fab1c2fe497205
// https://api.themoviedb.org/3/movie/popular?api_key=026742c0cb24d10234fab1c2fe497205&language=en-US&page=2

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddWatchList = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("movieList", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  let handleRemoveWatchList = (movieObj) => {
    let newWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchlist(newWatchlist);
  };

  useEffect(() => {
    let data = localStorage.getItem("movieList");
    if (!data) {
      return
    }
    setWatchlist(JSON.parse(data));
  }, []); 

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Movies
                watchlist={watchlist}
                handleAddWatchList={handleAddWatchList}
                handleRemoveWatchList={handleRemoveWatchList}
              />
            }
          />
          <Route
            path="/Watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                setWatchlist={setWatchlist}
              />
            }
          />
          <Route path="/About" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
