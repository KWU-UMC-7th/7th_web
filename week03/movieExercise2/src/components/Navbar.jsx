import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #111;
    color: white;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color : #FF0558;
`;

const NavItems = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #777;
    }
`;

const LoginButton = styled(Button)`
    background-color: black; /* 로그인 버튼의 배경색 */
    text-decoration: none;
    
    &:hover {
        background-color: #444; /* 로그인 버튼 hover 색상 */
    }
`;

const SignupButton = styled(Button)`
    background-color: #FF0558; /* 로그인 버튼의 배경색 */
    text-decoration: none;
    
    &:hover {
        background-color: #E0044D; /* 로그인 버튼 hover 색상 */
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    MAENGCHA
                </Link>
            </Logo>
            <NavItems>
                <LoginButton as={Link} to="/login" >로그인</LoginButton>
                <SignupButton as={Link} to="/signup">회원가입</SignupButton>
            </NavItems>
        </Nav>
    );
};

export default Navbar;
