import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../components/navbar.jsx";
import SideBar from "../components/sidebar.jsx";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <SideBar />
        <Outlet />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
`;

export default RootLayout;