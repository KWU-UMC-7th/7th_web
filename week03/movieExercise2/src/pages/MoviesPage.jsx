import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";

const MoviesPage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTE2NmExOGFiZjNlMWMyZjgxNmEwZmY1ZWNkODIyMCIsIm5iZiI6MTcyODU3MDAxMi4yMjQ5MTIsInN1YiI6IjY3MDdhOTE1YzkyYzJlNTZkODYxNGQwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eLzih6enzthiDuKL8Zjh6-srUodMPMgAr_946fRZMMQ`
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);

    return (
<div className='posters'>
            { movies.data?.results.map((movie) => (
                <Card key={movie.id} id={movie.id} coverImg={movie.poster_path} title={movie.original_title} 
                rating={movie.vote_average} overview={movie.overview} />
                ))}
        </div>
    )
};

export default MoviesPage;