import axios from "axios";
import { useState, useEffect } from "react";
import Card from '../components/Card.jsx'; // Card 컴포넌트 불러오기
import * as S from '../components/styles.jsx'; // styled-components 사용을 가정한 파일 불러오기
const Popular= () => {
    const [movies, setMovies] = useState([])
    const API_key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTE2NmExOGFiZjNlMWMyZjgxNmEwZmY1ZWNkODIyMCIsIm5iZiI6MTcyODU3ODg1MC44OTc0NzcsInN1YiI6IjY3MDdhOTE1YzkyYzJlNTZkODYxNGQwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xhHY1flHE_hGDXyEYuk4uBfSmF2KdNBorhCF_6P1kO8';

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=ko-kr&page=1`, {
                headers: {
                    Authorization: `Bearer ${API_key}`
                }
            })
            console.log(movies);
            setMovies(movies);
        }
        getMovies()

    }, []);
    
    return (
        <S.CardList> {/* styled-components로 스타일링된 CardList 사용 */}
          {movies.data?.results.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </S.CardList>
      );
};

export default Popular;
