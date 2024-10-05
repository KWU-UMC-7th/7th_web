import React from 'react'
import { useState } from 'react';
import { MOVIES } from '../public/mocks/movies.js';
import './App.css';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500"

function Movie({title, poster_path,}) {
  return (
    <>
      <img src={IMG_BASE_URL + poster_path} />
      <div>{title}</div>
    </>
  )
}

function App() { 
  return (
    <>
    <div>
      {
        MOVIES.results.map((item) => {
          return(
            <Movie
              title={item.title}
              poster_path={item.poster_path}
            />
          )
        })
      }
    </div>
    </>
  );
}

export default App;