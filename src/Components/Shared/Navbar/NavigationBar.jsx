import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";

const NavigationBar = () => {
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
    <div className="flex items-center justify-between bg-blue-200 p-4 mt-3">
      <nav >  
        {/* menu button ----------------  */}

      <button
          onClick={toggleMenu}
          className="text-2xl text-blue-gray-900 focus:outline-none lg:hidden "
        >
          <RiMenu2Fill />
        </button>

        <div className={`lg:flex space-x-4 ${menuOpen ? "block" : "hidden lg:flex"}`} >
          {/* Navigation Links */}
          <ul 
          className="lg:flex gap-2"tabIndex={0}
          >
            <Link to="/">
              <li className=" hover:bg-blue-gray-100 rounded-xl px-2 py-1">
                Home
              </li>
            </Link>
            <Link to="/dp">
              <li className="hover:bg-blue-gray-100 rounded-xl px-2 py-1">
                AdminEdit
              </li>
            </Link>

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

            <Link to="/studentDetails">
              <li className="hover:bg-blue-gray-100 rounded-xl px-2 py-1">
                Payment
              </li>
            </Link>
          </ul>
        </div>
      </nav>
        
          {/* Signup and Login Buttons */}
          <div className="flex space-x-2 ">
            <button className="hover:bg-blue-gray-100 hover:text-black font-semibold rounded-xl bg-blue-gray-900 px-3 py-1 text-white">
              <Link to="/registration">Sign Up</Link>
            </button>
            <button className="hover:bg-blue-gray-100 hover:text-black font-semibold rounded-xl bg-blue-gray-900 px-3 py-1 text-white">
              <Link to="/login">Login</Link>
            </button>
          </div>

    </div>
  );
};

export default NavigationBar;
