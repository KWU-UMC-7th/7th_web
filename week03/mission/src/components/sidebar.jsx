import {Link} from "react-router-dom";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";

const Sidebar = () => {
    return (
        <Nav>
            <Search><Linkk to={'/search'}>
            <IoSearch />
            찾기</Linkk></Search>
            <Movies><Linkk to={'/movies'}>
            <BiCameraMovie />
            영화</Linkk></Movies>
        </Nav>
    );
};

export default Sidebar;

const Search = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    gap: 10px;
    margin-bottom: 15px;
    `;

const Movies = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    gap: 10px;
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
    background-color: #333;
    align-items: center;
    width: 140px;
    height: 100vh;
`;
