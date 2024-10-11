import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 한 줄에 7개의 카드 */
  gap: 20px;
  padding: 20px;
`;

export const Card = styled.div`
  
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
 
`;

export const StyledHoverImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd; 
  border-radius: 8px;
  margin-top: 20px;
  transition: filter 0.3s ease; /* 필터 변화를 부드럽게 */
  display: inline-block;

  &:hover {
    filter: brightness(70%); /* 밝기를 70%로 낮춰서 어두운 효과 */
  }
`;

export const BrandLink = styled(NavLink)`
 color: pink; /* 분홍색 글씨 */
  font-weight: bold; /* 굵은 글씨 */
  font-size: 2rem; /* 크게 설정 */
  text-decoration: none; /* 밑줄 제거 */
`;
export const Layout = styled.div`
  display: flex;
  flex-direction: column; /* Navbar와 메인 콘텐츠를 세로로 배치 */
  height: 100vh; /* 전체 높이를 차지하도록 설정 */
`;

export const Navbar = styled.nav`
  background-color: #333; /* 배경색 설정 */
  color: white; /* 텍스트 색상 설정 */
  padding: 1rem; /* 상하 여백 */
  display: flex;
  justify-content: space-between; /* 내비게이션 항목 간격 조정 */
`;
export const MainContainer = styled.div`
  display: flex; /* 사이드바와 콘텐츠를 가로로 배치 */
  flex: 1; /* 메인 콘텐츠가 남은 공간을 차지하도록 설정 */
`;

export const Sidebar = styled.div`
  width: 150px; /* 사이드바 너비 설정 */
  background-color: black; /* 사이드바 배경색 */
  padding: 1rem; /* 사이드바 안쪽 여백 */
`;
export const SearchContainer = styled.div`
  display: flex; /* 아이콘과 텍스트를 가로로 배치 */
  gap: 4px; /* 아이콘과 텍스트 사이 간격 */
  align-items: center; /* 수직 중앙 정렬 */
`;
export const Content = styled.div`
  flex: 1; /* 콘텐츠가 가용 공간을 차지하도록 설정 */
  padding: 1rem; /* 콘텐츠 안쪽 여백 */
`;
export const LoginLink = styled(NavLink)`
  color: white; /* 하얀색 글씨 */
  font-size: 1rem; /* 글씨 크기 설정 (작게) */
  margin-left: 20px; /* 왼쪽 여백 추가 */
  text-decoration: none; /* 밑줄 제거 */
  margin-left: auto;
  &:active {
    opacity: 0.7; /* 클릭할 때 투명도 70% 적용 */
  }
`;
export const SignupBtn = styled(NavLink)`
  color: white; /* 하얀색 글씨 */
  font-size: 1rem; /* 글씨 크기 설정 (작게) */
  margin-left: 20px; /* 왼쪽 여백 추가 */
  text-decoration: none; /* 밑줄 제거 */
  margin-left: 10px;
  background-color: #ff69b4;
  padding: 10px 20px;
  border-radius: 20px; /* 둥근 모서리 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 입체감을 위한 그림자 */
  &:hover {
    background-color: #ff1493; /* hover 시 더 진한 핑크색 */
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* hover 시 그림자 강화 */
  }`;

export const navbar = styled.nav`
  color: white; /* 텍스트 색상 설정 */
  padding: 1rem;
  display: flex; /* 가로 배치 */
  justify-content: space-between; /* 양쪽 끝으로 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
`;
export const SideLink = styled(NavLink)`
  color: white; /* 하얀색 글씨 */
  display: flex;
  gap:2px;
  align-items: center; /* 수직 중앙 정렬 */
  text-decoration: none; /* 밑줄 제거 */
  &:active {
    opacity: 0.7; /* 클릭할 때 투명도 70% 적용 */
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 2열로 구성 */
  gap: 20px; /* 간격 설정 */
  padding: 20px; /* 여백 설정 */
`;

// 이미지 카드 스타일
export const ImageCard = styled.div`
  position: relative; /* 자식 요소에 절대 위치를 적용할 수 있도록 설정 */
  overflow: hidden; /* 카드 범위를 넘어가는 내용 숨기기 */
`;

// 이미지 스타일
export const Image = styled.img`
  display: flex;
  width: 100%;
  border-radius: 5px;
  height: 100%; /* 이미지 비율 유지 */
`;

// 카테고리 레이블 스타일
export const CategoryLabel = styled.div`
  position: absolute;
  bottom: 10px; /* 아래에서 10px 떨어진 위치 */
  left: 5px; /* 왼쪽에서 10px 떨어진 위치 */
  background-color: rgba(128, 128, 128, 0.7); /* 투명한 회색 배경 */
  color: white; /* 글씨 색상 */
  padding: 5px 5px; /* 패딩 추가 */
  border-radius: 5px; /* 모서리 둥글게 */
`;