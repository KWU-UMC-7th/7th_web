import React from 'react';
import { movies } from './mocks/movies.js';
import Movie from './components/Movie';

function App() {
  return (
    <div>
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie
                key={item.id}
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
