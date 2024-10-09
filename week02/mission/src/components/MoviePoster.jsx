import { useState } from 'react';
import styled from 'styled-components';

const PosterContainer = styled.div`
  width: 100%; 
  position: relative;
  display: flex;
  flex-direction: column; 

`;

const PosterImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 22 / 32; 
  overflow: hidden;
  border-radius: 15px;
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  transition: filter 0.3s ease;
  filter: brightness(${props => props.isHover ? '0.5' : '1'});
  border-radius: 15px;
`;

const MovieDiscription = styled.div`
  margin-top: 10px;

`;

const MovieTitle = styled.p`
  font-weight: bold;
font-size:17px;
`;

const MovieDate = styled.span`
font-size:12px;
`;

const MoviePoster = ({ movie }) => {
  const [isHover, setIshover] = useState(false);

  return (
    <PosterContainer
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
    >
      <PosterImageWrapper>
        <PosterImage
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt="Movie Poster"
          isHover={isHover}
        />
      </PosterImageWrapper>
      <MovieDiscription>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDate>{movie.release_date}</MovieDate>
      </MovieDiscription>
    </PosterContainer>
  );
}

export default MoviePoster;
