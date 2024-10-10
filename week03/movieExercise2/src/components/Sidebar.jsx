import { Link } from 'react-router-dom';
import { FaSearch, FaFilm } from 'react-icons/fa';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    width: 200px;
    background-color: #111;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    color: white;
    text-decoration: none;

    &:hover {
        background-color: #333;
    }
`;


const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon as={Link} to="/search">
                <FaSearch /> 찾기
            </Icon>
            <Icon as={Link} to="/movies">
                <FaFilm /> 영화
            </Icon>
        </SidebarContainer>
    );
};

export default Sidebar;
