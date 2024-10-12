import styled from "styled-components";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <SidebarStyle>
            <Link to='/movies'>영화</Link>
        </SidebarStyle>
    );
};

export default Navbar;

const SidebarStyle = styled.div`
    background-color: violet;
    width: 200px;
`
