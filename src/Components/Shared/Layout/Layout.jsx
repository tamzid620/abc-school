import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Layout = () => {

    const location = useLocation();
    const noHeaderFooter =
        location.pathname.includes('login') ||
        location.pathname.includes('signup') ||
        location.pathname.includes('studentDetails') ||
        location.pathname.includes('dp') ||
        location.pathname.includes('pendingStudent') ||
        location.pathname.includes('allStudent') ||
        location.pathname.includes('Payment')  ||
        location.pathname.includes('enterPhone') ||
        location.pathname.includes('enterotp') ||
        location.pathname.includes('AdminStudentEdit') ||
        location.pathname.includes('AdminStudentDetails') 

    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Layout;