import styled from "styled-components";
import Card from "../components/movies.jsx"; // Movie 카드 컴포넌트 임포트
import useFetchMovies from "../components/useFetchMovies.jsx"; // 커스텀 훅 임포트

// UpcomingPage 컴포넌트 정의
const UpcomingPage = () => {
  // useFetchMovies 훅을 사용하여 다가오는 영화 데이터를 가져옴
  const { movies } = useFetchMovies(
    "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1"
  );

  return (
    <Wrapper>
      <MovieList>
        {/* movies 배열을 순회하며 각 영화에 대한 Card와 상세 정보를 렌더링 */}
        {movies.map((movie) => (
          <MovieContainer key={movie.id}>
            {/* 영화 포스터와 관련된 Card 컴포넌트 */}
            <Card movie={movie} />
            <MovieDetails>
              {/* 영화 제목을 표시, 폰트 두께를 600으로 설정 */}
              <StyledP fontWeight={600}>{movie.title}</StyledP>
              {/* 영화 개봉일을 표시, 폰트 크기를 8px로 설정 */}
              <StyledP fontSize="8px">{movie.release_date}</StyledP>
            </MovieDetails>
          </MovieContainer>
        ))}
      </MovieList>
    </Wrapper>
  );
};

export default UpcomingPage;

// StyledP 컴포넌트 정의
// 폰트 크기와 두께를 props로 받아 동적으로 스타일링
const StyledP = styled.p`
  color: white; /* 텍스트 색상을 흰색으로 설정 */
  margin: 0; /* 기본 마진 제거 */
  font-size: ${(props) => (props.fontSize ? props.fontSize : "10px")}; /* 폰트 크기 설정 */
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)}; /* 폰트 두께 설정 */
  justify-content: left; /* 텍스트를 왼쪽 정렬 */
  text-align: left; /* 텍스트를 왼쪽 정렬 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  white-space: nowrap; /* 텍스트를 한 줄로 표시 */
  text-overflow: ellipsis; /* 넘치는 텍스트에 말줄임표 표시 */
  word-break: break-all; /* 단어를 강제로 줄바꿈 */
`;

// Wrapper 컴포넌트 정의
// 페이지의 전체 레이아웃을 감싸는 컨테이너
const Wrapper = styled.div`
  background-color: #000000; /* 배경색을 검은색으로 설정 */
  width: 100vw; /* 전체 뷰포트 너비 */
  min-height: 100vh; /* 최소 뷰포트 높이 */
  padding: 20px; /* 내부 여백 설정 */
`;

// MovieContainer 컴포넌트 정의
// 각 영화 아이템을 감싸는 컨테이너
const MovieContainer = styled.div`
  display: flex; /* 플렉스 박스 레이아웃 사용 */
  flex-direction: column; /* 세로 방향으로 아이템 정렬 */
  align-items: center; /* 아이템을 중앙 정렬 */
  width: 100%; /* 컨테이너의 너비를 부모에 맞춤 */
`;

// MovieDetails 컴포넌트 정의
// 영화의 제목과 개봉일을 표시하는 섹션
const MovieDetails = styled.div`
  width: 6rem; /* 너비를 6rem으로 설정 */
  margin-top: 10px; /* 위쪽 여백을 10px 추가 */
  text-align: center; /* 텍스트를 중앙 정렬 */
  color: white; /* 텍스트 색상을 흰색으로 설정 */
`;

// MovieList 컴포넌트 정의
// 영화 목록을 그리드 레이아웃으로 배치
const MovieList = styled.div`
  display: grid; /* 그리드 레이아웃 사용 */
  gap: 10px; /* 그리드 아이템 간의 간격을 10px으로 설정 */
  grid-template-columns: repeat(9, 1fr); /* 9열로 그리드 설정 */
  width: 100%; /* 그리드의 너비를 부모에 맞춤 */

  /* 반응형 디자인을 위해 화면 너비에 따라 그리드 열 수 조정 */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(7, 1fr); /* 화면 너비가 1200px 이하일 때 7열 */
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(5, 1fr); /* 화면 너비가 900px 이하일 때 5열 */
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr); /* 화면 너비가 600px 이하일 때 3열 */
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr); /* 화면 너비가 400px 이하일 때 2열 */
  }
`;
