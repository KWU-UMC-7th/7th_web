import React, { useState } from "react";
import styled from "styled-components";
import { MOVIES } from "./mocks/movies";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

// Styled Components
const StyledMovieItem = styled.div`
  position: relative;
  text-align: center;
  width: 150px;
  height: auto;
  margin: auto;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isHovered }) => ($isHovered ? "scale(1.05)" : "scale(1)")};

  img {
    width: 100%;
    height: auto;
    max-width: 150px;
    border-radius: 10px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98%;
    background-color: ${({ $bgColor }) => $bgColor || 'rgba(0, 0, 0, 0.7)'};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
`;

const AppContainer = styled.div`
  background: black;
  padding: 20px;
  color: white;
`;

const App = () => {
  const movies = MOVIES.results;

  return (
    <AppContainer>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </AppContainer>
  );
};

const MovieItem = ({ movie }) => {
  const [isPosterHovered, setIsPosterHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsPosterHovered(true);
  };

  const handleMouseLeave = () => {
    setIsPosterHovered(false);
  };

  return (
    <StyledMovieItem
      $isHovered={isPosterHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={`${imageBaseUrl}${movie.poster_path}`}
        alt={movie.original_title}
      />
      {isPosterHovered && (
        <div className="overlay">
          <p>{movie.original_title}</p>
        </div>
      )}
    </StyledMovieItem>
  );
};

export default App;
