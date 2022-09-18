import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import searchIcon from "./search.svg"


const API_URL = 'https://www.omdbapi.com/?apikey=381e33da';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);


  return (
    <div className="app">
      <h1 className="title">MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies!"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
      </div>
      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movieInfo={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;