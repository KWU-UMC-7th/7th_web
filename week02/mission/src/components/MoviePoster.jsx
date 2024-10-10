import '../App.css'
import { useState } from 'react';

const MoviePoster = ({ key, poster_path }) => {
  const [isHover, setIshover] = useState(false);
  return (
    <div onMouseEnter={() => setIshover(true)} onMouseLeave={() => setIshover(false)}>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} key={key}
        style={{
          borderRadius: "15px", transition: "filter 0.3s ease",
          filter: isHover ? "brightness(0.5)" : "brightness(1)"
        }}
      />
    </div>
  );
}

export default MoviePoster;