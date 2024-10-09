import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";


const SidebarContainer = styled.div`
width:250px;
background-color:rgb(19,21,23);
display:flex;
flex-direction: column;
padding-top:20px;
`

const SidebarMenu = styled(Link)`
width:100%;
display:flex;
align-items:center;
color:white;
padding:20px;
gap:10px;
text-decoration-line:none;
`
const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarMenu to="/search"><FaSearch /> 찾기</SidebarMenu>
      <SidebarMenu to="/movies"><BiSolidCameraMovie /> 영화</SidebarMenu>
    </SidebarContainer>
  )
}
export default Sidebar