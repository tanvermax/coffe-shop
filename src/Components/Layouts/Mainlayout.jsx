import { Outlet } from "react-router-dom";
import Footer from "../Navber/Footer";
import Navber from "../Navber/Navber";


const Mainlayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="min-h-[calc(100vh-342px)]  container mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;