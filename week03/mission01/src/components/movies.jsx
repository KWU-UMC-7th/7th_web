import { useState } from "react";
import styled from "styled-components";

const Movie = ({ movie }) => {
  return (
    <StyledButton
      background={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    >
      <Overlay className="overlay"></Overlay>
    </StyledButton>
  );
};

export default Movie;

// styled-components로 버튼을 정의
const StyledButton = styled.button`
  width: 100px;
  height: 150px;
  background-image: url(${(props) => props.background});
  background-size: cover;
  border: none;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  &:hover .overlay {
    opacity: 1;
  }
`;

// hover 상태에서 보여줄 overlay 스타일 정의
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0; /* 기본적으로 숨김 */
  transition: opacity 0.3s ease; /* 부드러운 전환 효과 */
`;

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
