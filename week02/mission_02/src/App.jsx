import React from 'react'
import { useState } from 'react';
import { MOVIES } from '../public/mocks/movies.js';
import './App.css';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500"

function Movie({poster_path,}) {
  return (
    <>
      <div>
        <img className='movie_element' src={IMG_BASE_URL + poster_path} />
      </div> 
    </>
  )
}

function App() { 
  return (
    <>
    <div className='movie_area'>
      {
        MOVIES.results.map((item) => {
          return(
              <Movie poster_path={item.poster_path}/>
          )
        })
      }
    </div>
    </>
  );
}

export default App;