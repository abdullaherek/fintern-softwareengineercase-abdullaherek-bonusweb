import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetail } from "./components/Detail/MovieDetail.js";
import { HomePage } from "./components/HomePage/HomePage.js";
import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import { About } from "./components/About/About.js";
import { APIKEY } from "./APIKEY.js";
export const MoviesContext = createContext();
function App() {
  const key = APIKEY.key;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MoviesContext.Provider value={{ movies }}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/movie/:code" element={<MovieDetail />}></Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<HomePage />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </MoviesContext.Provider>
  );
}

export default App;
