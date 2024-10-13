import {Outlet} from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <FlexBox>
                <Sidebar/>
                <Outlet/>
            </FlexBox>
        </>
        
    );
};

export default RootLayout;

const FlexBox = styled.div`
    display: flex;
    flex-grow: 1;

    height: auto;
`
