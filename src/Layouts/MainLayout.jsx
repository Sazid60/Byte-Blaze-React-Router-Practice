
import NavBar from "../Components/NavBar";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <NavBar></NavBar>
            </div>
            <div className='min-h-[calc(100vh-117px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;