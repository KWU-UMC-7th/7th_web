import { useState, useEffect } from 'react';
import MoviePoster from './MoviePoster';
import axios from 'axios';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(9, 1fr); 
  width: 100%;
  height: auto;
  width:100vw;
height:100vh;
background-color:black;
color:white;
padding:20px;
`;

const MoviePage = ({ category = "popular" }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const result = await axios.get(`https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFlMWVhOTgxMTEyYmU0ZjFkNDRjZjRjNjQ0YjQ5MCIsIm5iZiI6MTcyODQxMjk1MC41OTk1OTMsInN1YiI6IjY2MWQxNmRmMWU2NDg5MDE2MmQ0NmUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SUm3-OyTWEogigxPZQudlkP-I8WByROYD-Lw6rq07C0',
        }
      });
      console.log(result?.data.results);
      setMovies(result.data.results);
    };
    getMovies();
  }, []);

  return (
    <GridContainer>
      {movies ? movies.map((e) => (
        <MoviePoster movie={e} key={e.id} />
      )) : <div>sry...</div>}
    </GridContainer>
  );
}

export default MoviePage;
