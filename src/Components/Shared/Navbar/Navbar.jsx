import { Link, useLocation } from "react-router-dom";
import navimg1 from "../../../../public/images/educational_board.png";
import navimg2 from "../../../../public/images/bangladesh_government.png";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";

// default system

const Navbar = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    setActiveDropdown(null);
  }, [location]);

  
  // navlist section ------------------------------------
  const navlist = (
    <>
      <Link to="/">
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to="/dp">
        <li>
          <a>AdminEdit</a>
        </li>
      </Link>
      <li tabIndex={0}>
        <details
          open={activeDropdown === "academic"}
          onClick={() => setActiveDropdown("academic")}
        >
          <summary>Academic</summary>
          <ul className="p-2 bg-blue-500">
            <Link to="/ourCampus">
              <li className="bg-blue-200 rounded-xl mb-1 px-3 py-2">
                Our Campus
              </li>
            </Link>
            <Link to="/academicRules">
              <li className="bg-blue-200 rounded-xl mb-1 px-3 py-2">
                Academic Rules
              </li>
            </Link>
            <Link to="/academicCalender">
              <li className="bg-blue-200 rounded-xl mb-1 px-3 py-2">
                Academic Calender
              </li>
            </Link>
            <Link to="/routine">
              <li className="bg-blue-200 rounded-xl mb-1 px-3 py-2">Routine</li>
            </Link>
            <Link to="/syllabus">
              <li className="bg-blue-200 rounded-xl mb-1 px-3 py-2">
                Syllabus
              </li>
            </Link>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details
          open={activeDropdown === "admission"}
          onClick={() => setActiveDropdown("admission")}
        >
          <summary>Admission</summary>
          <ul className="p-2 bg-blue-500">
            <Link to="/applyOnline">
              <li className="bg-blue-200 rounded-xl mb-1 px-3 py-2">
                Apply Online
              </li>
            </Link>
            <Link to="/applyMethod">
              <li className="bg-blue-200 rounded-xl mb-1 px-3 py-2">
                Apply Method
              </li>
            </Link>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details
          open={activeDropdown === "about"}
          onClick={() => setActiveDropdown("about")}
        >
          <summary>About</summary>
          <ul className="p-2 bg-blue-500">
            <Link to="/ourHistory">
              <li className="bg-blue-200 rounded-xl mb-1 px-3 py-2">
                Our History
              </li>
            </Link>
            <Link to="/teachers">
              <li className="bg-blue-200 rounded-xl mb-1 px-3 py-2">
                Teachers
              </li>
            </Link>
            <Link to="/employees">
              <li className="bg-blue-200 rounded-xl mb-3 px-3 py-2">
                Employees
              </li>
            </Link>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/notice">Notice</Link>
      </li>
      <li>
        <Link to="/studentDetails">Payment</Link>
      </li>
    </>
  );

  // navlist section ------------------------------------

  return (
    <div>
      {/* navigation banner section  */}
      <div className="flex justify-between items-center py-5 px-3">
        <img
          className="lg:w-[100px] lg:h-[100px] sm: w-[60px] sm: h-[60px]"
          src={navimg1}
          alt=""
        />
        <h1 className="text-center leading-10">
          <span
            style={{ fontFamily: "Tiro Bangla, serif" }}
            className="font-semibold text-4xl "
          >
            মায়ের দোয়া স্কুল এন্ড কলেজ
          </span>{" "}
          <br />
          <span
            style={{ fontFamily: "Young Serif, serif" }}
            className="text-lg"
          >
            Mayer Dua School and College
          </span>
        </h1>
        <img
          className="lg:w-[100px] lg:h-[100px] sm: w-[60px] sm: h-[60px]"
          src={navimg2}
          alt=""
        />
      </div>

      {/* navbar section  */}
      <div>
        <div className="navbar bg-blue-200 relative z-10">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-200 rounded-box w-52"
              >
                {navlist}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navlist}
            </ul>
          </div>
          {/* login and signin options  */}
          <div className="navbar-end">
            <div className="hidden gap-2 lg:flex">
              <Button
                variant="text"
                size="sm"
                color="blue-gray"
                className="text-white border"
              >
                <a href="/login">Log In</a>
              </Button>
              <Button variant="gradient" size="sm">
                {/* <a href="/signup">Sign Up</a> */}
                <a href="/registration">Sign Up</a>
              </Button>
            </div>
            <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
              <Button
                className="text-white"
                variant="gradient"
                size="sm"
                fullWidth
              >
                <a href="/login">Log In</a>
              </Button>
              <Button variant="gradient" size="sm" fullWidth>
                {/* <a href="/signup">Sign Up</a> */}
                <a href="/registration">Sign Up</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
