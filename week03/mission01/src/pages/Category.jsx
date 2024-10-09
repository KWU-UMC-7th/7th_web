import styled from "styled-components";
import CategoryButton from "../components/movieCategory";

import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <Wrapper>
      <StyledHeader2>카테고리</StyledHeader2>
      <StyledDiv>
        <Link to="/category/now-playing">
          <CategoryButton
            text="현재 상영중인"
            imageUrl="https://cdn.pixabay.com/photo/2024/09/23/05/54/wave-9067749_1280.jpg"
          />{" "}
        </Link>
        <Link to="/category/popular">
          <CategoryButton
            text="인기있는"
            imageUrl="https://cdn.pixabay.com/photo/2024/01/04/16/25/reservoir-8487798_1280.jpg"
          />
        </Link>
        <Link to="/category/top-rated">
          <CategoryButton
            text="높은 평가를 받은"
            imageUrl="https://cdn.pixabay.com/photo/2024/01/17/17/14/bird-8515097_1280.jpg"
          />
        </Link>
        <Link to="/category/upcoming">
          <CategoryButton
            text="개봉 예정중인"
            imageUrl="https://cdn.pixabay.com/photo/2023/09/25/07/54/lemon-cake-8274419_1280.jpg"
          />
        </Link>
      </StyledDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  padding: 10px 15px;
`;

const StyledDiv = styled.div`
  padding: 15px;
  display: flex;
  gap: 10px;
`;

const StyledHeader2 = styled.h2`
  color: white;
  margin: 0;
`;
export default CategoryPage;
