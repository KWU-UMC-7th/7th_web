import styled from "styled-components";
import { MdMovie } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <StyledSideBar>
      <Link to="/search" style={{ textDecoration: "none" }}>
        <ContentDiv>
          <FaSearch />
          <Text>찾기</Text>
        </ContentDiv>
      </Link>
      <Link to="/category" style={{ textDecoration: "none" }}>
        <ContentDiv>
          <MdMovie />
          <Text>영화</Text>
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

const Text = styled.span`
  transform: translateY(-5px); 
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
