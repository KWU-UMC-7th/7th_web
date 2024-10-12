import React from 'react'; // 필요한 컴포넌트도 임포트해야 함
import { movies } from '../mocks/movies.js'; // mock 데이터를 사용하는 경우
import Movie from '../components/Movie'; // Movie 컴포넌트를 임포트

export default function Home() {
  return (
    <>
      <div className="page-container" style={{ fontSize: '45px' }}>Home</div>
      <div className="app-container">
        {
          movies.results.map((item) => (
            <Movie
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          ))
        }
      </div>
    </>
  )
}
