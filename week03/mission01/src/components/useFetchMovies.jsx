import { useState, useEffect } from "react";
import axios from "axios";

// Custom Hook
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
        setMovies(response.data.results); // 데이터를 상태에 저장
      } catch (err) {
        setError(err.message);
      }
    };
    if (requestAdr) {
      getMovies(); // requestAdr가 유효할 때만 API 호출
    }
  }, [requestAdr]); // 의존성 배열에 requestAdr 추가

  return { movies }; // API 데이터를 리턴
};

export default useFetchMovies;
