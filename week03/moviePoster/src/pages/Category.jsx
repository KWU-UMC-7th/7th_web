import styled from "styled-components";
import CategoryButton from "../components/movieCategory";
import { Link } from "react-router-dom";
import category1 from "@/imgs/category1.png";
import category2 from "@/imgs/category2.jpg";
import category3 from "@/imgs/category3.png";
import category4 from "@/imgs/category4.png";

const CategoryPage = () => {
  return (
    <Wrapper>
      <StyledCategoryList>카테고리</StyledCategoryList>
      <StyledDiv>
        <Link to="/category/now-playing">
          <CategoryButton
            text="현재 상영중인"
            imageUrl={category1} 
          />
        </Link>
        <Link to="/category/popular">
          <CategoryButton
            text="인기있는"
            imageUrl={category2} 
          />
        </Link>
        <Link to="/category/top-rated">
          <CategoryButton
            text="높은 평가를 받은"
            imageUrl={category4} 
          />
        </Link>
        <Link to="/category/upcoming">
          <CategoryButton
            text="개봉 예정중인"
            imageUrl={category3}
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

const StyledCategoryList = styled.h2`
  color: white;
  margin: 0;
`;

export default CategoryPage;
