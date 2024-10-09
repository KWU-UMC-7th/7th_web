import styled from "styled-components";
import { MdOutlineMovie } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <StyledSideBar>
      <Link to="/search" style={{ textDecoration: "none" }}>
        <ContentDiv>
          <MdOutlineSearch /> 검색
        </ContentDiv>
      </Link>
      <Link to="/category" style={{ textDecoration: "none" }}>
        <ContentDiv>
          <MdOutlineMovie /> 영화
        </ContentDiv>
      </Link>
    </StyledSideBar>
  );
};

const ContentDiv = styled.div`
  display: flex;
  gap: 10px;
  color: white;
  padding-bottom: 10px;
  font-size: 15px;
`;
const StyledSideBar = styled.div`
  padding: 10px 20px;
  float: left;
  width: 100px;
  background-color: #131517;
  z-index: 1;
  overflow: auto;
`;

export default SideBar;
