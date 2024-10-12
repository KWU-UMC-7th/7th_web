/* top-rated page */
import React, { useEffect, useState } from 'react';
import M_Comp from '../components/movies'
import styled from 'styled-components';
  
const Container = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    justify-content: flex-start; 
    margin: -10px; 
`;
  
const TopRatedPage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA4NDVjNTRjMTRhNWI0NDRhMWNjMzc2ZTRkNmNhNSIsIm5iZiI6MTcyODY2MDIzNy4xNTk2MTYsInN1YiI6IjY3MDkzZjI5OGQ0ODdmNjU0MTI4OWFlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HUEIbzGCckJran3SYfO-pLgC5275G7dfdXDBxWjUNzc';
        const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1';
      
        const fetchMovies = async () => {
            try {
              const response = await fetch(API_URL, {
                headers: {
                  'Authorization': `Bearer ${ACCESS_TOKEN}`,
                  'Content-Type': 'application/json',
                },
              });
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const data = await response.json();
              setMovies(data.results);
              setIsLoading(false);
            } catch (error) {
              console.error('Error fetching: ', error);
              setError(error.message);
              setIsLoading(false);
            }
          };
      
          fetchMovies();
        }, []); 
      
        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
      
    return (
        <Container>
            {movies.map((movie) => (
                <M_Comp
                key={movie.id}
                id={movie.id}
                image={movie.poster_path} 
                title={movie.title} 
                releaseDate={movie.release_date}
            />
            ))}
        </Container>
    );
};
  
export default TopRatedPage;