import { useState, useEffect } from "react";
import axios from "axios";

// useFetchMovies 훅 정의
// requestAdr는 요청할 API 주소를 인자로 받음
const useFetchMovies = (requestAdr) => {
  // movies 상태 변수를 선언하고, 초기값을 빈 배열로 설정
  const [movies, setMovies] = useState([]);

  // useEffect 훅을 사용하여 requestAdr가 변경될 때마다 API 요청을 보냄
  useEffect(() => {
    // 비동기 함수 getMovies 선언
    const getMovies = async () => {
      try {
        // axios를 사용하여 API 요청 보내기
        const response = await axios.get(requestAdr, {
          // Authorization 헤더에 Bearer 토큰을 포함하여 인증 처리
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdhMWU1YTcwMzExNjAwZjI5NTBkNDBiMDcwZjEyMCIsIm5iZiI6MTcyODQyMTE1NC45NzY3MjIsInN1YiI6IjY3MDU4YWQyNDAyYmU4NTJiM2U5YzE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V6disOG1awa217wX8Mls2qnU1TDCrvF6mGMgrHr6j9c",
          },
        });
        // 응답 결과에서 movies 데이터를 추출하여 상태 업데이트
        setMovies(response.data.results);
      } catch (err) {
        // 에러 발생 시 에러 메시지를 저장 (setError는 생략된 코드로 가정)
        setError(err.message);
      }
    };

    // requestAdr가 있을 경우에만 API 요청 수행
    if (requestAdr) {
      getMovies();
    }
  }, [requestAdr]); // requestAdr가 변경될 때마다 useEffect 실행

  // movies 상태를 반환하여 호출한 컴포넌트에서 사용할 수 있게 함
  return { movies };
};

export default useFetchMovies;
