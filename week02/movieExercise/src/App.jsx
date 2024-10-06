import React, { useState } from "react";
import { MOVIES } from "./mocks/movies";

const firstUrl = "https://image.tmdb.org/t/p/w500";

const MovieItem = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOn = () => {
    setIsHovered(true);
  };

  const handleMouseOff = () => {
    setIsHovered(false);
  };

  return (
    <div 
      style={{ position: "relative", textAlign: "center" ,width: "150px", height: "auto", margin: "auto"}}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
    >
      <img 
        src={`${firstUrl}${movie.poster_path}`} 
        alt={movie.original_title}
        style={{ width: "100%", height: "auto", maxWidth: "150px" }}
      />
      {/* 검정 배경과 텍스트, hover 시 보여줌 */}
      {isHovered && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "96%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const movies = MOVIES.results;

  return (
    <div>
      {/* 10개씩 2줄로 출력 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: "5px" }}>
        {movies.slice(0, 10).map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: "5px", marginTop: "10px" }}>
        {movies.slice(10, 20).map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
