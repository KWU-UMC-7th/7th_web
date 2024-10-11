import {useEffect, useState} from "react";
import axios from "axios";
import Poster from "./Poster";
import styled from 'styled-components';

const Popular = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=ko-kr&page=1`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjc1YmNkMzQ4MjU2YWY5MDQ1YzEzNjNhMjBhNDEzNiIsIm5iZiI6MTcyODYzMDI1NS44ODg3MTEsInN1YiI6IjY3MDg5OWIzZDM1N2EyMTAzOTk2OWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4PXgI0_mgHjNGeNYkLgGiSr9onLTZt9ieGlEyrW70-4`
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);

    return (
        <Posters>
            { movies.data?.results.map((movie) => (
                <Poster key={movie.id} id={movie.id} coverImg={movie.poster_path} title={movie.title} 
                release_date = {movie.release_date} />
                ))}
        </Posters>
    )
};

export default Popular;

const Posters = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
`;