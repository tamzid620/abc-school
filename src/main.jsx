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
import StudentEdit from "./Components/Pages/AdminPanel/Navigation/StudentEdit";
import AdminPayment from "./Components/Pages/Payment/AdminPayment";

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
        path: "/studentEdit/:studentId",
        element: <StudentEdit />,
      },
      {
        path: "/adminPayment/:studentId",
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
