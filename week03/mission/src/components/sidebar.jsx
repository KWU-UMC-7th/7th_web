/* Sidebar */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilm } from 'react-icons/fa'; 
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #0D0D0D;
  padding: 10px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: white;
  margin-bottom: 10px;
  border-radius: 4px;
  &:hover {
    background-color: #ddd; 
  }
  svg {
    margin-right: 8px; 
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavLink to="/search">
        <FaSearch /> 찾기
      </NavLink>
      <NavLink to="/movies">
        <FaFilm /> 영화
      </NavLink>
    </SidebarContainer>
  );
};

export default Sidebar;