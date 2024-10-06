import React, { useState } from "react";
import { MOVIES } from "./mocks/movie";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

const MovieItem = ({ movie }) => {
  const [isPosterHovered, setIsPosterHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsPosterHovered(true);
  };

  const handleMouseLeave = () => {
    setIsPosterHovered(false);
  };

  return (
    <div 
      style={{ 
        position: "relative", 
        textAlign: "center", 
        width: "150px", 
        height: "auto", 
        margin: "auto", 
        transition: "transform 0.3s ease-in-out",
        transform: isPosterHovered ? "scale(1.05)" : "scale(1)"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={`${imageBaseUrl}${movie.poster_path}`} 
        alt={movie.original_title}
        style={{ width: "100%", height: "auto", maxWidth: "150px", borderRadius: "10px" }}
      />
      {/* Hover 시 색상 배경과 텍스트 표시 */}
      {isPosterHovered && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "96%",
          backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px"
        }}>
          <p>{movie.original_title}</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const movies = MOVIES.results;

  return (
    <div style={{ 
      background: "linear-gradient(135deg, #b2d8d8, #d6e4aa)", 
      padding: "20px", 
      borderRadius: "15px" 
    }}>
      {/* 10개씩 2줄로 출력 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: "10px" }}>
        {movies.slice(0, 10).map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: "10px", marginTop: "20px" }}>
        {movies.slice(10, 20).map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
