import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NavigationBar from "../Navbar/NavigationBar";
import NavDaisy from "../Navbar/NavDaisy";


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
        location.pathname.includes('AdminStudentDetails') ||

        location.pathname.includes('adminTeachers') ||
        location.pathname.includes('adminTeachersEdit') ||
        location.pathname.includes('adminTeachersAdd') ||

        location.pathname.includes('adminStudentAdd') ||
        location.pathname.includes('adminStudentEdit') ||
        location.pathname.includes('adminStudentAdd') ||

        location.pathname.includes('adminEmployees') ||
        location.pathname.includes('adminEmployeesEdit') ||
        location.pathname.includes('adminEmployeesAdd') ||

        location.pathname.includes('adminNotices') ||
        location.pathname.includes('adminNoticesEdit') ||
        location.pathname.includes('adminNoticesAdd') ||

        location.pathname.includes('adminEvent') ||

        location.pathname.includes('adminRoutine') ||
        location.pathname.includes('adminRoutineEdit') ||
        location.pathname.includes('adminRoutineAdd') ||

        location.pathname.includes('adminSyllabus') ||
        location.pathname.includes('adminSyllabusEdit') ||
        location.pathname.includes('adminSyllabusAdd') ||

        location.pathname.includes('adminExamination') ||
        location.pathname.includes('pendingPayment') ||
        location.pathname.includes('approvedPayment') ||
        location.pathname.includes('paymentHistory') ||
        location.pathname.includes('invoice')

    return (
        <div>
            {noHeaderFooter || <Navbar />}
            {noHeaderFooter || <NavigationBar/>}
            {noHeaderFooter || <NavDaisy/>}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Layout;