/* movie(category) page */
import React from 'react';
import styled from 'styled-components';
import { Link, Outlet, useLocation } from 'react-router-dom'; 

const Container = styled.div`
  padding: 10px;
  background-color: black; 
  color: white; 
  min-height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 20px; 
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
`;

const Card = styled.div`
  background-color: #333; 
  border-radius: 8px; 
  overflow: hidden; 
  position: relative; 
  height: 200px; 
  cursor: pointer; 
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05); 
  }
`;

const CardImage = styled.img`
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
`;

const CardTitle = styled.div`
  position: absolute; 
  bottom: 10px; 
  left: 10px; 
  background-color: rgba(0, 0, 0, 0.7); 
  color: white; 
  padding: 10px; 
  text-align: left; 
  border-radius: 5px;
`;

const MoviesPage = () => {
  const location = useLocation();
  // 경로가 정확히 '/movies'일 때만 카테고리와 카드 표시
  const isOnMoviesMainPage = location.pathname === '/movies';

  const movies = [
    { id: 1, title: '현재 상영중인', path: '/movies/now-playing' },
    { id: 2, title: '인기있는', path: '/movies/popular' },
    { id: 3, title: '높은 평가를 받은', path: '/movies/top-rated' },
    { id: 4, title: '개봉 예정인', path: '/movies/up-coming' },
  ];

  return (
    <Container>
      {isOnMoviesMainPage && ( 
        <>
          <Title>카테고리</Title>
          <CardGrid>
            {movies.map((movie) => (
              <Link key={movie.id} to={movie.path} style={{ textDecoration: 'none' }}>
                <Card>
                  <CardImage src={`https://picsum.photos/600/800?random=${movie.id}`} alt={movie.title} />
                  <CardTitle>{movie.title}</CardTitle>
                </Card>
              </Link>
            ))}
          </CardGrid>
        </>
      )}
      <Outlet /> { }
    </Container>
  );
};

export default MoviesPage;







