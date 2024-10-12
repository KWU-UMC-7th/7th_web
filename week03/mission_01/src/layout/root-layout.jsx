import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <div className="flex-box">
                <Sidebar/>
                <Outlet/>
            </div>
        </>
        
    );
};

export default RootLayout;
