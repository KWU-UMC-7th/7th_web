//각 영화를 보여주는 카드 컴포넌트 
import React from 'react';

const MovieCard = ({ movie }) => {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    };

    const imageStyle = {
        width: '100%',
        borderRadius: '5px',
    };

    return (
        <div style={cardStyle}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={imageStyle}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieCard;
