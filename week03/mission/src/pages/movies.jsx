import {useEffect, useState} from "react";
import axios from "axios";
import Poster from "./Poster";

const MoviesPage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDliZTg4NGI1MTM3OTY3NzRhODA3Yjc4ZDBlZThjNSIsIm5iZiI6MTcyODIwMTA0My42NzY2MzgsInN1YiI6IjY1ZDM3MmZiMmRhODQ2MDBjODI0OTYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3kMzIEFUP9UetqDRSrIOh-2WhfsjJd4gqreQolte0Rw`
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


