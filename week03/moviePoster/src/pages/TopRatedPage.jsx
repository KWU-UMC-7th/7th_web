import styled from "styled-components";
import MovieCard from "../components/movies.jsx";
import useFetchMovies from "../components/useFetchMovies.jsx";

const TopRatedPage = () => {
  const { movies } = useFetchMovies(
    "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1"
  );

  return (
    <PageWrapper>
      <MoviesGrid>
        {movies.map((movie) => (
          <MovieItem key={movie.id}>
            <MovieCard movie={movie} />
            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
            </MovieInfo>
          </MovieItem>
        ))}
      </MoviesGrid>
    </PageWrapper>
  );
};

// 영화 제목 스타일링
const MovieTitle = styled.p`
  color: white;
  font-weight: 600;
  margin: 0;
  font-size: 10px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

// 영화 개봉일 스타일링
const MovieReleaseDate = styled.p`
  color: white;
  font-size: 8px;
  margin: 0;
  text-align: left;
`;

// 페이지 전체를 감싸는 Wrapper
const PageWrapper = styled.div`
  background-color: #000;
  width: 100vw;
  min-height: 100vh;
  padding: 20px;
`;

// 각 영화 정보를 담는 Container
const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// 영화 제목 및 개봉일 정보를 담는 Container
const MovieInfo = styled.div`
  width: 6rem;
  margin-top: 10px;
  text-align: center;
`;

const MoviesGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(9, 1fr);
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default TopRatedPage;
