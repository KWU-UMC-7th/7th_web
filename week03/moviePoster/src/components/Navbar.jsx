import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">
        <HomeButton>Yongcha</HomeButton>
      </Link>
      <FlexDiv>
        <Link to="/login">
          <Button color="white" hoverBackground="#34eb5b">
            로그인
          </Button>
        </Link>
        <Link to="/signup">
          <Button color="white" backgroundColor="#e10f57" hoverBackground="#ffcc00">회원가입</Button>
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

const Button = styled.div`
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 15px;
  font-family: "paybooc-Light", sans-serif;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.4s ease, color 0.4s ease, transform 0.3s ease;
  border: none;
  color: ${(props) => (props.color ? props.color : "#e10f57")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};

  &:hover {
    background-color: ${(props) => props.hoverBackground || "#1e6b7b"}; /* hover 시 다른 배경색 */
    color: white;
    transform: scale(1.05); /* 살짝 확대 효과 */
  }
`;

const HomeButton = styled.div`
  padding: 15px 10px;
  position: relative;
  margin-top: -15px; /* HomeButton 위치를 15px 위로 */
  border: none;
  display: inline-block;
  color: #e10f57;
  font-size: 30px;
  font-weight: 600;
  transition: color 0.4s ease, transform 0.3s ease;

  &:hover {
    color: #ff6600; /* hover 시 다른 색상 */
    transform: scale(1.05); /* 살짝 확대 효과 */
  }
`;

export default Navbar;
