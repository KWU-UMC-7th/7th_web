import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Sidebar from "../components/sidebar.jsx";
import styled from "styled-components";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <Main>
            <Sidebar/>
            <Outlet/>
            </Main>
        </>
    );
};

export default RootLayout;

const Main = styled.div`
    display: flex;
`;
