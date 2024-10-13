//import {useEffect, useState} from "react";
//import axios from "axios";
import styled from "styled-components";
import { MOVIES } from "../../public/mocks/movies";
import Card from "../components/card.jsx";

const MoviesPage = () => {

    return (
        <GridBoxStyle>
            {MOVIES.results.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </GridBoxStyle>
    )
};

export default MoviesPage;

const GridBoxStyle = styled.div`
    display: grid;
    max-width: 1200px;
    grid-template-columns: repeat(7, 1fr);  //가로로 7개
    gap: 16px;
    background-color: black;
    padding: 16px;
`
