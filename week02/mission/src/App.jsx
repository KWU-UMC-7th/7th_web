import { useState } from 'react';

import MoviePoster from './components/MoviePoster';
import { MOVIES } from '../src/mocks/movie';

function App() {
  const movies = MOVIES.results;


  return (
    <div style={{ display: "grid", gap: '10px', gridTemplateColumns: 'repeat(10, 1fr)' }}>
      {movies.map((e) => (
        <MoviePoster poster_path={e.poster_path} key={e.id} />
      ))
      }
    </div>
  );
}

export default App;