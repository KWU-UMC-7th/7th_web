// App.js
import React from 'react';
import { MOVIES } from './api.jsx'; // api.jsx에서 MOVIES를 가져옵니다.
import Movie from './Movie'; // Movie 컴포넌트를 가져옵니다.

// App 컴포넌트
const App = () => {
  const appStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
  };

  return (
    <div style={appStyle}>
      {MOVIES.results.map(movie => (
        <Movie
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default App;
