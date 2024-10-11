import '../App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import Card from '../components/Card.jsx'; // Card 컴포넌트 불러오기
import * as S from '../components/styles.jsx'; // styled-components 사용을 가정한 파일 불러오기

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNkYWIyMDkxMzI2Y2Y3NTkwNTAwYjQyODNkNjZkNyIsIm5iZiI6MTcyNjE0MTU3Ny42MDM2ODcsInN1YiI6IjY0MzVmY2Y2NjUxZmNmMDBkM2RhYzNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cFPsPRHPidq2OnJ3U-3wHJYhnGajDFqUsM8XJ_a_0bw`
          },
        });
        setMovies(response.data); // API 응답에서 영화 목록을 저장
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getMovies();
  }, []);

  return (
    <S.CardList> {/* styled-components로 스타일링된 CardList 사용 */}
      {movies.results?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </S.CardList>
  );
}

export default HomePage;
