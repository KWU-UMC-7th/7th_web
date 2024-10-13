/* root-layout */
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/navbar'; 
import Sidebar from '../components/sidebar';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

const Content = styled.div`
  flex: 1;
  padding: 10px;
`;

const RootLayout = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <MainContent>
      <Sidebar /> 
        <Content>
          <Outlet /> { }
        </Content>
      </MainContent>
    </LayoutContainer>
  );
};

export default RootLayout;
