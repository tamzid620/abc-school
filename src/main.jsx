import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Shared/Layout/Layout";
import ErrorPage from "./Components/Shared/ErrorPage/ErrorPage";
import Home from "./Components/Pages/Home/Home";
import Teachers from "./Components/Pages/About/Teachers";
import Employees from "./Components/Pages/About/Employees";
import FullMessages from "./Components/Pages/Home/FullMessages";
import OurCampus from "./Components/Pages/Academic/OurCampus";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Payment from "./Components/Pages/Payment/Payment";
import Syllabus from "./Components/Pages/Academic/Syllabus";
import StudentDetails from "./Components/Pages/StudentDetails/StudentDetails";
import AdminPanel from "./Components/Pages/AdminPanel/AdminPanel";
import PendingStudent from "./Components/Pages/AdminPanel/Navigation/PendingStudent";
import AllStudent from "./Components/Pages/AdminPanel/Navigation/AllStudent";
import AdminLogin from "./Components/Pages/Login/AdminLogin";
import Notice from "./Components/Pages/Notice/Notice";
import EnterPhone from "./Components/Pages/Payment/EnterPhone";
import EnterOTP from "./Components/Pages/Payment/EnterOTP";
import AcademicRules from "./Components/Pages/Academic/AcademicRules";
import AcademicCalender from "./Components/Pages/Academic/AcademicCalender";
import Routine from "./Components/Pages/Academic/Routine";
import ApplyOnline from "./Components/Pages/Admission/ApplyOnline";
import ApplyMethod from "./Components/Pages/Admission/ApplyMethod";
import OurHistory from "./Components/Pages/About/OurHistory";
import AdminStudentEdit from "./Components/Pages/AdminPanel/Navigation/AdminStudentEdit.jsx";
import AdminStudentDetails from "./Components/Pages/AdminPanel/Navigation/AdminStudentDetails";
import Registration from "./Components/Pages/SignUp/Registration";
import AdminTeachers from "./Components/Pages/AdminPanel/Navigation/AdminTeachers.jsx";
import AdminTeachersEdit from "./Components/Pages/AdminPanel/Navigation/AdminTeachersEdit.jsx";
import AdminTeachersAdd from "./Components/Pages/AdminPanel/Navigation/AdminTeachersAdd.jsx";
import AdminStudentAdd from "./Components/Pages/AdminPanel/Navigation/AdminStudentAdd.jsx";
import AdminNotices from "./Components/Pages/AdminPanel/Navigation/AdminNotices.jsx";
import AdminEvent from "./Components/Pages/AdminPanel/Navigation/AdminEvent.jsx";
import AdminRoutine from "./Components/Pages/AdminPanel/Navigation/AdminRoutine.jsx";
import AdminSyllabus from "./Components/Pages/AdminPanel/Navigation/AdminSyllabus.jsx";
import AdminExamination from "./Components/Pages/AdminPanel/Navigation/AdminExamination.jsx";
import AdminPayment from "./Components/Pages/AdminPanel/Navigation/AdminPayment.jsx";
import AdminEmployees from "./Components/Pages/AdminPanel/Navigation/AdminEmployees.jsx";
import AdminEmployeesEdit from "./Components/Pages/AdminPanel/Navigation/AdminEmployeesEdit.jsx";
import AdminEmployeesAdd from "./Components/Pages/AdminPanel/Navigation/AdminEmployeesAdd.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // default panel route ---------------------------
      // Home section
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fullMessages",
        element: <FullMessages />,
      },
      // Academic section
      {
        path: "/ourCampus",
        element: <OurCampus />,
      },
      {
        path: "/academicRules",
        element: <AcademicRules />,
      },
      {
        path: "/academicCalender",
        element: <AcademicCalender />,
      },
      {
        path: "/routine",
        element: <Routine />,
      },
      {
        path: "/syllabus",
        element: <Syllabus />,
      },
      // Admission section
      {
        path: "/applyOnline",
        element: <ApplyOnline />,
      },
      {
        path: "/applyMethod",
        element: <ApplyMethod />,
      },
      // About section
      {
        path: "/ourHistory",
        element: <OurHistory />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      // Notice section
      {
        path: "/notice",
        element: <Notice />,
      },
      // Payment section
      {
        path: "/enterPhone",
        element: <EnterPhone />,
      },
      {
        path: "/enterotp",
        element: <EnterOTP />,
      },
      {
        path: "/studentDetails",
        element: <StudentDetails />,
      },
      {
        path: "/Payment",
        element: <Payment />,
      },
      // login and signup section
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      // admin panel route ---------------------------
      {
        path: "/adminlogin",
        element: <AdminLogin />,
      },
      {
        path: "/dp",
        element: <AdminPanel />,
      },
      {
        path: "/pendingStudent",
        element: <PendingStudent />,
      },
      {
        path: "/allStudent",
        element: <AllStudent />,
      },
      {
        path: "/adminStudentAdd",
        element: <AdminStudentAdd />,
      },
      {
        path: "/adminStudentEdit/:studentId",
        element: <AdminStudentEdit />,
      },
      {
        path: "/adminStudentDetails/:studentId",
        element: <AdminStudentDetails />,
      },
      {
        path: "/adminTeachers",
        element: <AdminTeachers />,
      },
      {
        path: "/adminTeachersEdit/:teacherId",
        element: <AdminTeachersEdit />,
      },
      {
        path: "/adminTeachersAdd",
        element: <AdminTeachersAdd />,
      },
      {
        path: "/adminEmployees",
        element: <AdminEmployees />,
      },
      {
        path: "/adminEmployeesEdit/:employeeId",
        element: <AdminEmployeesEdit />,
      },
      {
        path: "/adminEmployeesAdd",
        element: <AdminEmployeesAdd/>,
      },
      {
        path: "/adminNotices",
        element: <AdminNotices />,
      },
      {
        path: "/adminEvent",
        element: <AdminEvent />,
      },
      {
        path: "/adminRoutine",
        element: <AdminRoutine />,
      },
      {
        path: "/adminSyllabus",
        element: <AdminSyllabus/>,
      },
      {
        path: "/adminExamination",
        element: <AdminExamination />,
      },
      {
        path: "/adminPayment",
        element: <AdminPayment />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
