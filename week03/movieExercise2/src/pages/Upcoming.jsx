import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";
import styled from 'styled-components';

const Upcoming = () => {
    const [movies, setMovies] = useState([])
    const API_key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTE2NmExOGFiZjNlMWMyZjgxNmEwZmY1ZWNkODIyMCIsIm5iZiI6MTcyODU3ODg1MC44OTc0NzcsInN1YiI6IjY3MDdhOTE1YzkyYzJlNTZkODYxNGQwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xhHY1flHE_hGDXyEYuk4uBfSmF2KdNBorhCF_6P1kO8';

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=ko-kr&page=1`, {
                headers: {
                    Authorization: `Bearer ${API_key}`
                }
            })
            setMovies(movies);
        }
        getMovies()
        
    }, []);
    console.log(movies)
    return (
        <CardLists>
            { movies.data?.results.map((movie) => (
                <Card key={movie.id} id={movie.id} coverImg={movie.poster_path} title={movie.title} 
                date = {movie.release_date} />
                ))}
        </CardLists>
    )
};

export default Upcoming;

const CardLists = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
`;
