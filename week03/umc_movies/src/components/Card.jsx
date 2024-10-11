import React from 'react';
import { Link } from 'react-router-dom'; // Link 추가
import * as S from './styles'; // styled-components 불러오기

const Card = ({ movie }) => {
  return (
    <S.Card>
      {/* 이미지를 클릭하면 /category 페이지로 이동 */}
      <Link to={`/category/${movie.id}`}> {/* 경로를 영화 ID에 맞게 설정 */}
        <S.StyledHoverImage
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} // 영화 포스터 이미지
          alt={movie.title}
        />
      </Link>
      <h4>{movie.title}</h4> {/* 영화 제목 */}
      <p>{movie.release_date}</p> {/* 개봉 날짜 */}
    </S.Card>
  );
};

export default Card;
