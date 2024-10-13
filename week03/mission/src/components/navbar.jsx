/* Navbar */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0D0D0D;
  padding: 20px 20px;
`;

const Logo = styled(Link)`
  font-size: 25px;
  font-weight: bold;
  color: #C51162;
  text-decoration: none;
  &:hover {
    opacity: 0.7; 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled(Link)`
  padding: 8px 16px;
  width: 100px;
  text-decoration: none;
  border-radius: 7px;
  transition: background-color 0.3s ease;
  color: white;
  text-align: center;
  background-color: ${props => 
    props.variant === 'login' ? 'black' : 
    props.variant === 'signup' ? '#E91E63' : 
    'transparent' 
  };
  &:hover {
    opacity: 0.7; 
  }
`;

const Navbar = () => {
    return (
      <NavbarContainer>
        <Logo to="/">YONGCHA</Logo> 
        <ButtonContainer>
          <Button to="/login" variant="login">로그인</Button> 
          <Button to="/signup" variant="signup">회원가입</Button> 
        </ButtonContainer>
      </NavbarContainer>
    );
  };
  
  export default Navbar;