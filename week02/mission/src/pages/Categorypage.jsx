import styled from 'styled-components';
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  padding: 20px;
`;

const CategoryHeader = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ImgContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const ImgWrapper = styled(Link)`
  position: relative; 
  width: 100%;
  height: 200px;
`;

const CategoryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ImgLabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.6); 
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

const Categorypage = () => {
  return (
    <Container>
      <CategoryHeader>카테고리</CategoryHeader>
      <ImgContainer>
        <ImgWrapper to="/movies/now-playing">
          <CategoryImg src={img1} alt="Category 1" />
          <ImgLabel>현재 상영중인</ImgLabel>
        </ImgWrapper>
        <ImgWrapper to="/movies/popular">
          <CategoryImg src={img2} alt="Category 2" />
          <ImgLabel>인기있는</ImgLabel>
        </ImgWrapper>
        <ImgWrapper to="/movies/top-rated">
          <CategoryImg src={img3} alt="Category 3" />
          <ImgLabel>높은 평가를 받은</ImgLabel>
        </ImgWrapper>
        <ImgWrapper to="/movies/up-coming">
          <CategoryImg src={img4} alt="Category 4" />
          <ImgLabel>개봉 예정중인</ImgLabel>
        </ImgWrapper>
      </ImgContainer>
    </Container>
  );
};

export default Categorypage;