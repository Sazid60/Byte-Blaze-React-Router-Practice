
import NavBar from "../Components/NavBar";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;