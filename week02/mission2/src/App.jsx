import './App.css'
import { useState } from 'react'
import MOVIES from './mocks/movies'
import M_Comp from './components/movies'

function App() {
  const [movies, setMovies] = useState(MOVIES)
  
  return (
    <div style={{
      display: 'flex',
      margin: '10px',
    }}>
      <div style={{
        display: 'inline-flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '15px',
        margin: '5px',
      }}>
        {movies && movies.results.map((movie) => (
          <M_Comp
            key={movie.id}
            id={movie.id}
            image={movie.poster_path} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;