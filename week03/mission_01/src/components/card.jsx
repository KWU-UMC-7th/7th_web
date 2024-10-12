import React from 'react'
import styled from "styled-components";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500"

function Movie({poster_path}) {
    return (
      <>
        <div>
          <img className='movie_element' src={IMG_BASE_URL + poster_path} />
        </div> 
      </>
    )
  }

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
    grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
`