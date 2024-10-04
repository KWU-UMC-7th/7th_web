// Movie.js
import React from 'react';

// Movie 컴포넌트
const Movie = ({ title, overview, poster_path, vote_average }) => {
  // inline 스타일
  const movieStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '20px',
    padding: '15px',
    maxWidth: '300px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const posterStyle = {
    width: '100%',
    borderRadius: '8px',
  };

  const titleStyle = {
    fontSize: '1.2em',
    margin: '10px 0',
    fontWeight: 'bold',
  };

  const overviewStyle = {
    fontSize: '0.9em',
    margin: '10px 0',
  };

  const ratingStyle = {
    fontSize: '1em',
    color: 'green',
  };

  return (
    <div style={movieStyle}>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} style={posterStyle} />
      <h2 style={titleStyle}>{title}</h2>
      <p style={overviewStyle}>{overview}</p>
      <p style={ratingStyle}>Rating: {vote_average}</p>
    </div>
  );
};

export default Movie;
