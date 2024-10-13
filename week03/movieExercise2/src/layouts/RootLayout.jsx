import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Main = styled.div`
    display: flex;
    flex: 1;
`;

const Content = styled.div`
    flex: 1;
    padding: 20px;
    background-color: #000; /* 검은색 배경 */
    color: white; /* 글씨 색상 흰색으로 변경 */
`;

const RootLayout = () => {
    return (
        <Container>
            <Navbar />
            <Main>
                <Sidebar />
                <Content>
                    <Outlet />
                </Content>
            </Main>
        </Container>
    );
};

export default RootLayout;
