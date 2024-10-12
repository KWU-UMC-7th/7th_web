// navbar.jsx
import styled from "styled-components";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <NavbarStyle>
            <NavbarBtn><Link to={'/'}>홈 페이지로 이동</Link></NavbarBtn>
            <NavbarBtn><Link to='/movies'>영화 목록 페이지로 이동</Link></NavbarBtn>
            <NavbarBtn><Link to='/login'>로그인</Link></NavbarBtn>
            <NavbarBtn><Link to='/signup'>회원가입</Link></NavbarBtn>
        </NavbarStyle>
    );
};

export default Navbar;

const NavbarStyle = styled.div`
    background-color: rebeccapurple;
`

const NavbarBtn = styled.span`
    color: white;
    margin: 10px;
    boarder: 10px;

    &:hover {
		filter: brightness(0.5);
	}
`