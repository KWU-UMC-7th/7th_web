import { useState, useEffect } from "react";
import axios from "axios";


const useFetchMovies = (requestAdr) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(requestAdr, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdhMWU1YTcwMzExNjAwZjI5NTBkNDBiMDcwZjEyMCIsIm5iZiI6MTcyODQyMTE1NC45NzY3MjIsInN1YiI6IjY3MDU4YWQyNDAyYmU4NTJiM2U5YzE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V6disOG1awa217wX8Mls2qnU1TDCrvF6mGMgrHr6j9c",
          },
        });
        setMovies(response.data.results); 
      } catch (err) {
        setError(err.message);
      }
    };
    if (requestAdr) {
      getMovies(); 
    }
  }, [requestAdr]);

  return { movies };
};

export default useFetchMovies;
