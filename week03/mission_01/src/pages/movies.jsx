//import {useEffect, useState} from "react";
//import axios from "axios";

import { MOVIES } from "../../public/mocks/movies";
import Card from "../components/card.jsx";

const MoviesPage = () => {

    return (
        <div>
            {MOVIES.results.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </div>
    )
};

export default MoviesPage;


