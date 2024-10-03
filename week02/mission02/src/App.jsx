import './App.css'
import { useState } from 'react'
import MOVIES from './mocks/movies'
import Poster from './Poster'

function App() {
  const [movies, setMovies] = useState(MOVIES)

  return (
    <div>
        <div className='posters'>
            { movies && movies.results.map((movie) => (
                <Poster key={movie.id} id={movie.id} coverImg={movie.poster_path} title={movie.original_title} 
                rating={movie.vote_average} overview={movie.overview} />
                ))}
        </div>
    </div>
)
}

export default App
