import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default RootLayout;
