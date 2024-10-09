import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">
        <HomeButton>Yongcha</HomeButton>
      </Link>
      <FlexDiv>
        <Link to="/signup">
          <LogicButton>signup</LogicButton>
        </Link>
        <Link to="/login">
          <LogicButton color="white" backgroundColor="#e10f57">
            Login
          </LogicButton>
        </Link>
      </FlexDiv>
    </StyledNavbar>
  );
};

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const StyledNavbar = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #131517;
`;
const LogicButton = styled.div`
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 15px;
  font-family: "paybooc-Light", sans-serif;
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  border: none;
  color: ${(props) => (props.color ? props.color : "#e10f57")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  &:hover {
    background-color: #1e6b7b;
    color: white;
  }
`;
const HomeButton = styled.div`
  padding: 15px 10px;
  position: relative;
  border: none;
  display: inline-block;
  border: none;
  color: #e10f57;
  font-size: 20px;
  font-weight: 600;
`;

export default Navbar;
