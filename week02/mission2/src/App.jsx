import React from "react";
import { MOVIES } from "../mocks/movies";
import "./App.css";

const MovieList = () => {
  return (
    <div className="movie-list">
      {MOVIES.results.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <div className="overlay">
            <h3 className="movie-title">{movie.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>영화 목록</h1>
      <MovieList />
    </div>
  );
};

export default App;
