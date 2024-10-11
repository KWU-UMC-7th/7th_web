import {Link} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <Nav>
            <Logo><Linka to={'/'}>YONGCHA</Linka></Logo>
            <SignDiv>
            <Login><Linka to={'/login'}>로그인</Linka></Login>
            <Join><Linka to={'/signup'}>회원가입</Linka></Join>
            </SignDiv>
        </Nav>
    );
};

export default Navbar;

const Logo = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #333;
    margin-left: 10px;
    :visited {
      color: #ed115e;
      text-decoration: none;
    }
`;

const Linka = styled(Link)`
    font-weight: bold;
    color: white;
    :visited {
      color: #ed115e;
      text-decoration: none;
    }
    text-decoration: none;
`;

const Nav = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    background-color: #2b2b2b;
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
    background-color: #ed115e;
    padding: 5px;
    border-radius: 10px;
}
`;

const Join = styled.div`
    background-color: #ed115e;
    border-radius: 10px;
    align-items: center;
    padding: 5px;
    :hover {
    color: black;
    }
`;