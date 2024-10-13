import styled from "styled-components";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <SidebarStyle>
            <Link to='/movies'>영화</Link>
            <Link to ='/search'>찾기</Link>
        </SidebarStyle>
    );
};

export default Sidebar;

const SidebarStyle = styled.div`
    background-color: violet;
    width: 200px;

    Link{
      display: block;
    }
`
