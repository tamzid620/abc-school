import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import navimg1 from "../../../../public/images/educational_board.png";
import navimg2 from "../../../../public/images/bangladesh_government.png";

const NavDaisy = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (dropdownNumber) => {
    setDropdown1Open(false);
    setDropdown2Open(false);
    setDropdown3Open(false);

    switch (dropdownNumber) {
      case 1:
        setDropdown1Open(!dropdown1Open);
        break;
      case 2:
        setDropdown2Open(!dropdown2Open);
        break;
      case 3:
        setDropdown3Open(!dropdown3Open);
        break;
      default:
        break;
    }
  };

  // responsive menu button  --------
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
            এ.বি.সি স্কুল এন্ড কলেজ
          </span>{" "}
          <br />
          <span
            style={{ fontFamily: "Young Serif, serif" }}
            className="text-lg"
          >
            A.B.C School and College
          </span>
        </h1>
        <img
          className="lg:w-[100px] lg:h-[100px] sm: w-[60px] sm: h-[60px]"
          src={navimg2}
          alt=""
        />
      </div>

    <nav className="bg-blue-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation for large devices */}
        <ul className="hidden md:flex space-x-4 list-none">
          <li className="hover:bg-blue-gray-100 rounded-xl px-2 py-1">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-blue-gray-100 rounded-xl px-2 py-1">
            <Link to="/dp">AdminEdit</Link>
          </li>

          {/* Academic Menu  */}
          <li className="relative group" onClick={() => toggleDropdown(1)}>
            <span className=" cursor-pointer group-hover:underline flex items-center hover:bg-blue-gray-100 rounded-xl px-2 py-1">
              Academic <IoMdArrowDropright />
            </span>
            <ul
              className={`absolute ${
                dropdown1Open ? "block" : "hidden"
              } space-y-2   p-2 mt-2 z-10 bg-blue-500 rounded-xl`}
            >
              <Link to="/ourCampus">
                <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                  OurCampus
                </li>
              </Link>
              <Link to="/academicRules">
                <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                  AcademicRules
                </li>
              </Link>
              <Link to="/academicCalender">
                <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                  AcademicCalender
                </li>
              </Link>
              <Link to="/notice">
                <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                  Notice
                </li>
              </Link>
              <Link to="/routine">
                <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                  Routine
                </li>
              </Link>
              <Link to="/syllabus">
                <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1">
                  Syllabus
                </li>
              </Link>
            </ul>
          </li>

          {/* Admission Menu */}
          <li className="relative group" onClick={() => toggleDropdown(2)}>
            <span className=" cursor-pointer group-hover:underline flex items-center hover:bg-blue-gray-100 rounded-xl px-2 py-1">
              Admission <IoMdArrowDropright />
            </span>
            <ul
              className={`absolute ${
                dropdown2Open ? "block" : "hidden"
              } space-y-2   p-2 mt-2 z-10 bg-blue-500 rounded-xl`}
            >
              <Link to="/applyOnline">
                <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                  ApplyOnline
                </li>
              </Link>
              <Link to="/applyMethod">
                <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                  ApplylMethod
                </li>
              </Link>
            </ul>
          </li>

          {/* About Menu  */}
          <li className="relative group" onClick={() => toggleDropdown(3)}>
            <span className=" cursor-pointer group-hover:underline flex items-center hover:bg-blue-gray-100 rounded-xl px-2 py-1">
              About <IoMdArrowDropright />
            </span>
            <ul
              className={`absolute ${
                dropdown3Open ? "block" : "hidden"
              } space-y-2   p-2 mt-2 z-10 bg-blue-500 rounded-xl`}
            >
              <Link to="/ourHistory">
                <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                  OurHistory
                </li>
              </Link>
              <Link to="/teachers">
                <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                  Teachers
                </li>
              </Link>
              <Link to="/employees">
                <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1">
                  Employees
                </li>
              </Link>
            </ul>
          </li>

          <li className="hover:bg-blue-gray-100 rounded-xl px-2 py-1">
            <Link to="/studentDetails">Payment</Link>
          </li>
        </ul>

{/* ------------------------------------------------------------------- */}
{/* Signup and Login Buttons */}
      <div className=" flex space-x-2">
        <button className="hover:bg-blue-gray-100 hover:text-black font-semibold rounded-xl bg-blue-gray-900 px-3 py-1 text-white">
          <Link to="/registration">Sign Up</Link>
        </button>
        <button className="hover:bg-blue-gray-100 hover:text-black font-semibold rounded-xl bg-blue-gray-900 px-3 py-1 text-white">
          <Link to="/login">Login</Link>
        </button>
      </div>
{/* ------------------------------------------------------------------- */}

        {/* Menu button for small and medium devices */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            Menu
            {/* <RiMenu2Fill /> */}
          </button>
        </div>
{/* ------------------------------------------------------------------------- */}

        {/* Floating menu for small and medium devices */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-blue-200 p-4 space-y-2 z-10">
            <div className="hover:bg-blue-gray-100 rounded-xl px-2 py-1">
            <Link to="/">Home</Link>
            </div>
            <div className="hover:bg-blue-gray-100 rounded-xl px-2 py-1">
            <Link to="/dp">AdminEdit</Link>
            </div>

            {/* Academic Menu  */}
            <li className="relative group list-none" onClick={() => toggleDropdown(1)}>
              <span className=" cursor-pointer group-hover:underline flex items-center hover:bg-blue-gray-100 rounded-xl px-2 py-1">
                Academic <IoMdArrowDropright />
              </span>
              <ul
                className={`absolute ${
                  dropdown1Open ? "block" : "hidden"
                } space-y-2  p-2 mt-2 z-10 bg-blue-500 rounded-xl`}
              >
                <Link to="/ourCampus">
                  <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                    OurCampus
                  </li>
                </Link>
                <Link to="/academicRules">
                  <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                    AcademicRules
                  </li>
                </Link>
                <Link to="/academicCalender">
                  <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                    AcademicCalender
                  </li>
                </Link>
                <Link to="/notice">
                  <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                    Notice
                  </li>
                </Link>
                <Link to="/routine">
                  <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                    Routine
                  </li>
                </Link>
                <Link to="/syllabus">
                  <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1">
                    Syllabus
                  </li>
                </Link>
              </ul>
            </li>

            {/* Admission Menu */}
            <li className="relative group list-none" onClick={() => toggleDropdown(2)}>
              <span className=" cursor-pointer group-hover:underline flex items-center hover:bg-blue-gray-100 rounded-xl px-2 py-1">
                Admission <IoMdArrowDropright />
              </span>
              <ul
                className={`absolute ${
                  dropdown2Open ? "block" : "hidden"
                } space-y-2   p-2 mt-2 z-10 bg-blue-500 rounded-xl`}
              >
                <Link to="/applyOnline">
                  <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                    ApplyOnline
                  </li>
                </Link>
                <Link to="/applyMethod">
                  <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                    ApplylMethod
                  </li>
                </Link>
              </ul>
            </li>

            {/* About Menu  */}
            <li className="relative group list-none" onClick={() => toggleDropdown(3)}>
              <span className=" cursor-pointer group-hover:underline flex items-center hover:bg-blue-gray-100 rounded-xl px-2 py-1">
                About <IoMdArrowDropright />
              </span>
              <ul
                className={`absolute ${
                  dropdown3Open ? "block" : "hidden"
                } space-y-2   p-2 mt-2 z-10 bg-blue-500 rounded-xl`}
              >
                <Link to="/ourHistory">
                  <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                    OurHistory
                  </li>
                </Link>
                <Link to="/teachers">
                  <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1 mb-1">
                    Teachers
                  </li>
                </Link>
                <Link to="/employees">
                  <li className="bg-blue-gray-200 hover:bg-blue-gray-100 rounded-xl px-3 py-1">
                    Employees
                  </li>
                </Link>
              </ul>
            </li>
            <div className="hover:bg-blue-gray-100 rounded-xl px-2 py-1">
            <Link to="/studentDetails">Payment</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
    </div>
  );
};

export default NavDaisy;
