import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MOVIES } from "./mocks/movies";
import Movie from "../components/movies";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className="movie-list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gap: "10px",
        }}
      >
        {MOVIES.results.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
