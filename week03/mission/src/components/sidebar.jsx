import {Link} from "react-router-dom";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { BiSolidMovie } from "react-icons/bi";

const Sidebar = () => {
    return (
        <Nav>
            <Search><Linka to={'/search'}>
            <IoSearch /><Text>찾기</Text>
                </Linka></Search>
            <Movies><Linka to={'/movies'}>
            <BiSolidMovie /><Text>영화</Text>
            </Linka></Movies>
        </Nav>
    );
};

export default Sidebar;

const Search = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    color: white;
    margin: 15px;
    `;

const Movies = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    margin: 15px;
    `;

const Text = styled.div`
    margin-left: 10px;
`;

const Linka = styled(Link)`
    font-weight: bold;
    color: white;
    :visited {
        color: #ed115e;
        text-decoration: none;
    }
        text-decoration: none;
    display: flex;
    align-items: center;
`;

const Nav = styled.div`
    background-color: #2b2b2b;
    align-items: center;
    min-width: 200px;
    height: 100vh;
`;