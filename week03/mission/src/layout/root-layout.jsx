import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
const MainContent = styled.div`
  display: flex;
  flex:1;
  height:100vh;
`;
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <MainContent>
        <Sidebar />
        <Outlet />
      </MainContent>

    </>
  );
};

export default RootLayout;