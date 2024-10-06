// navbar.jsx
import {Link} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <Nav>
            <Logo><Linkk to={'/'}>YONGCHA</Linkk></Logo>
            <SignDiv>
            <Login><Linkk to={'/login'}>로그인</Linkk></Login>
            <Join><Linkk to={'/signup'}>회원가입</Linkk></Join>
            </SignDiv>
        </Nav>
    );
};

export default Navbar;

const Logo = styled.div`
    font-size: 26px;
    font-weight: bold;
    color: #333;
    margin-left: 20px;
    :visited {
        color: #DC1767;
        text-decoration: none;
    }
`;

const Linkk = styled(Link)`
    font-weight: bold;
    color: white;
    :visited {
        color: #DC1767;
        text-decoration: none;
    }
        text-decoration: none;
`;

const Nav = styled.div`
width: 100vw;
    display: flex;
    justify-content: space-between;
    background-color: #2D2D2D;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 10px;
`;

const SignDiv = styled.div`
    margin-right: 40px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
`;

const Login = styled.div`
margin-right: 20px;
padding: 5px;
border-radius: 10px;
:hover {
background-color: #DC1767;
padding: 5px;
border-radius: 10px;
}
`;

const Join = styled.div`
        background-color: #DC1767;
        border-radius: 10px;
        align-items: center;
        padding: 5px;
    :hover {
    color: black;
    }
`;