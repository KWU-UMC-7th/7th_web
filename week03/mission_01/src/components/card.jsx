import React from 'react'
import styled from "styled-components";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500"

function Movie({poster_path}) {
    return (
      <>
        <CardStyle>
          <img className='movie_element' src={IMG_BASE_URL + poster_path} />
        </CardStyle> 
      </>
    )
  }

/*
const MoviesPage = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                headers: {
                    Authorization: `Bearer 토큰`,
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);
    
    return (
        <S.CardList>
            {movies.data?.results.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </S.CardList>
    )
};

*/

const Card = ({ movie }) => {
  return (
    <>
      <CardArea>
        <Movie poster_path={movie.poster_path}/>
      </CardArea>
    </>
  )
}

export default Card;

const CardArea = styled.div`
    padding: 5px;

    display: grid;
    gap:10px;
    grid-template-columns: repeat(7, 1fr);
`

const CardStyle = styled.div`
  max-width: 100px;
  height: auto;
`