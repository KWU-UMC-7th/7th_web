import { useState } from "react";

const Movie = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false); // hover 상태 관리

  return (
    <button
      key={movie.id}
      style={{
        width: "100px",
        height: "150px",
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        backgroundSize: "cover",
        border: "none",
        borderRadius: "5px",
        position: "relative", // overlay를 겹치기 위해 position 설정
      }}
      onMouseEnter={() => setIsHovered(true)} // 마우스가 올라오면 hover 상태로 변경
      onMouseLeave={() => setIsHovered(false)} // 마우스가 벗어나면 hover 상태 해제
    >
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // 검은색 반투명 배경
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px", // 둥근 모서리 유지
          }}
        />
      )}
    </button>
  );
};

export default Movie;

// <li key={movie.id}>
//   <h2>{movie.title}</h2>
//   <p>{movie.overview}</p>
//   <img
//     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//     alt={movie.title}
//     style={{ width: "200px" }}
//   />
// </li>

{
  /* <img
  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  alt={movie.title}
  style={{ width: "100%" }}
/>; */
}
