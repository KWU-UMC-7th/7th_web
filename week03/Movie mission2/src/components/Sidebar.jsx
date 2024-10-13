import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../mocks/movies'; // 영화 데이터 import
import MovieList from './Movie'; // MovieList 컴포넌트 import

export default function Sidebar() {
  const [sidebarWidth, setSidebarWidth] = useState(200);
  const [showMessage, setShowMessage] = useState(false);
  const [showMovies, setShowMovies] = useState(false); // 영화 목록 표시 여부 상태

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newWidth = Math.max(60, 200 - scrollY / 10);
    setSidebarWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    setShowMessage(true);
    setShowMovies(false); // "찾기" 클릭 시 영화 목록 숨김
  };

  const handleMovieClick = () => {
    setShowMovies(true); // 영화 목록 표시
    setShowMessage(false); // "찾기" 메시지 숨김
  };

  return (
    <div className="sidebar" style={{ width: `${sidebarWidth}px` }}>
      <ul>
        <li>
          <Link to="/search" onClick={handleSearchClick}>찾기</Link>
        </li>
        <li>
          <Link to="/movies" onClick={handleMovieClick}>영화</Link>
        </li>
      </ul>
      {showMessage && <p>찾는 버튼입니다</p>}
      {showMovies && <MovieList movies={movies} />} {/* 영화 목록 표시 */}
    </div>
  );
}
