import {useEffect, useState} from "react";
import axios from "axios";
import Poster from "./Poster";

const MoviesPage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjc1YmNkMzQ4MjU2YWY5MDQ1YzEzNjNhMjBhNDEzNiIsIm5iZiI6MTcyODYzMDI1NS44ODg3MTEsInN1YiI6IjY3MDg5OWIzZDM1N2EyMTAzOTk2OWQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4PXgI0_mgHjNGeNYkLgGiSr9onLTZt9ieGlEyrW70-4`
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);

    return (
<div className='posters'>
            { movies.data?.results.map((movie) => (
                <Poster key={movie.id} id={movie.id} coverImg={movie.poster_path} title={movie.original_title} 
                rating={movie.vote_average} overview={movie.overview} />
                ))}
        </div>
    )
};

export default MoviesPage;