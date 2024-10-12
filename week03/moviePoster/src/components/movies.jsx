import { useState } from "react";
import styled from "styled-components";

// Movie 컴포넌트 정의
// movie 객체를 인자로 받아, 영화 포스터 이미지를 스타일링된 버튼으로 보여줌
const Movie = ({ movie }) => {
  return (
    // StyledButton에 movie.poster_path를 사용하여 배경 이미지로 설정
    <StyledButton
      background={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    >
      {/* hover 시 나타날 Overlay 컴포넌트 */}
      <Overlay className="overlay"></Overlay>
    </StyledButton>
  );
};

export default Movie;

// styled-components로 버튼을 정의
// 영화 포스터 이미지를 배경으로 설정하고, hover 시 overlay를 보여줌
const StyledButton = styled.button`
  width: 100px; /* 버튼의 너비 */
  height: 150px; /* 버튼의 높이 */
  background-image: url(${(props) => props.background}); /* 포스터 이미지 설정 */
  background-size: cover; /* 이미지를 버튼 크기에 맞게 조정 */
  border: none; /* 버튼의 기본 테두리 제거 */
  border-radius: 5px; /* 버튼의 모서리를 둥글게 설정 */
  position: relative; /* overlay를 버튼 위에 겹치게 하기 위해 설정 */
  cursor: pointer; /* 마우스를 올렸을 때 커서를 포인터로 변경 */
  
  /* hover 시 overlay의 opacity가 1로 변경되어 나타남 */
  &:hover .overlay {
    opacity: 1;
  }
`;

// hover 상태에서 보여줄 overlay 스타일 정의
// 포스터 위에 반투명한 검은색 오버레이가 생기고, 텍스트를 중앙에 배치
const Overlay = styled.div`
  position: absolute; /* 버튼 안에서 절대 위치를 설정하여 버튼을 덮도록 함 */
  top: 0; /* 상단에 위치 */
  left: 0; /* 좌측에 위치 */
  width: 100%; /* 버튼의 너비에 맞게 100% */
  height: 100%; /* 버튼의 높이에 맞게 100% */
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 검은색 배경 */
  color: white; /* 텍스트 색상을 흰색으로 설정 */
  display: flex; /* 중앙에 텍스트를 배치하기 위해 flex 사용 */
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  border-radius: 5px; /* 버튼과 동일하게 모서리 둥글게 설정 */
  opacity: 0; /* 기본적으로 숨김 상태로 설정 */
  transition: opacity 0.3s ease; /* hover 시 부드럽게 나타나는 전환 효과 */
`;