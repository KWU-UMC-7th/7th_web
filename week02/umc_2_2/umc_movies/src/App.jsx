import './App.css';
import MOVIES from './mocks/movies';

function App() {
  const MovieList = () => {
    return (
      <div className="App">
       
        <ul>
          {MOVIES.results.map((movie) => (
            <li key={movie.id}>
              
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return <MovieList />;
}

export default App;
