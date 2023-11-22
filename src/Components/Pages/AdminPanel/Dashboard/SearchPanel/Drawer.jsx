import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosSpeedometer } from "react-icons/io";
import brandlogo from "../../../../../../public/icons/Main Logo White-01.png";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";

const Drawer = () => {
  return (
    <div>
      <div className="z-10 drawer lg:drawer-open fixed bg-blue-900 w-[300px] ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className=" border border-blue-600 hover:bg-blue-500
         hover:text-black w[2px] h-[20px] py-[31px] flex items-center 
         lg:hidden md:mt-0 md:me-[1000px] bg-blue-900 sm: me-[1000px] "
          >
            <BiMenuAltLeft size={40} />
          </label>
        </div>
        <div className="drawer-side lg:mt-[0px] md:mt-[60px] sm: mt-[60px]">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay "
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-blue-900 text-white border-r-2 border-blue-400">
            {/* Sidebar content here */}
            <a href="/">
              <img className="w-[150px]" src={brandlogo} alt="" />
            </a>
            <hr className="border border-blue-400 opacity-40 mt-[26px]" />
            <h1
              style={{ fontFamily: "Mooli, sans-serif" }}
              className="font-bold text-2xl text-white my-5"
            >
              Navigation{" "}
            </h1>

            {/* Dashboard section  */}
            <Link to="/dp">
              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-red-500">
                  <IoIosSpeedometer className="text-red-500" size={20} />{" "}
                  Dashboard
                </span>
              </li>
            </Link>

            {/* Student Information section */}
            <details className="dropdown mb-3">
              <summary className=" rounded-r-full bg-[#191c24] p-2 border-l-4 border-blue-500 w-full btn text-white hover:btn-ghost ">
                <IoIosSpeedometer className="text-blue-500 -ms-12" size={20} />
                Student Information <MdArrowDropDown size={20} />
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-blue-400 border rounded-box w-52 ">
                <Link to="/pendingStudent">
                  <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
                    Pending Students
                  </li>
                </Link>
                <hr className="mt-1" />
                <Link to="/allStudent">
                  <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
                    All Students
                  </li>
                </Link>
              </ul>
            </details>
            {/* Teachers section */}
            <li className="font-semibold text-lg mb-3">
              <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-green-500">
                <IoIosSpeedometer className="text-green-500" size={20} />
                <Link to="/adminTeachers">
                  <li>Teachers</li>
                </Link>
              </span>
            </li>
            {/*Employess section  */}
            <li className="font-semibold text-lg mb-3">
              <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-orange-500">
                <IoIosSpeedometer className="text-orange-500" size={20} />
                <Link to="/adminEmployees">Employess</Link>
              </span>
            </li>
            {/*Notice section  */}
            <li className="font-semibold text-lg mb-3">
              <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-gray-500">
                <IoIosSpeedometer className="text-gray-500" size={20} />
                <Link to="/adminNotices">Notices</Link>
              </span>
            </li>
            {/*Event section  */}
            <li className="font-semibold text-lg mb-3">
              <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-teal-500">
                <IoIosSpeedometer className="text-teal-500" size={20} />
                <Link to="/adminEvent">Events</Link>
              </span>
            </li>
            {/*Routine section  */}
            <li className="font-semibold text-lg mb-3">
              <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-pink-500">
                <IoIosSpeedometer className="text-pink-500" size={20} />
                <Link to="/adminRoutine">Routine</Link>
              </span>
            </li>
            {/* syllabus section  */}
            <li className="font-semibold text-lg mb-3">
              <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-yellow-500">
                <IoIosSpeedometer className="text-yellow-500" size={20} />
                <Link to="/adminSyllabus">Syllabus</Link>
              </span>
            </li>
            {/*Examination section  */}
            <li className="font-semibold text-lg mb-3">
              <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-indigo-500">
                <IoIosSpeedometer className="text-indigo-500" size={20} />
                <Link to="/adminExamination">Examination</Link>
              </span>
            </li>
            {/*payment section  */}
            <details className="dropdown mb-3">
              <summary className=" rounded-r-full bg-[#191c24] p-2 border-l-4 border-blue-500 w-full btn text-white hover:btn-ghost ">
                <IoIosSpeedometer
                  className="text-violet-500 -ms-24"
                  size={20}
                />
                Payment Fees <MdArrowDropDown size={20} />
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-blue-400 border rounded-box w-52 ">
                <Link to="/pendingPayment">
                  <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
                    Pending Payment
                  </li>
                </Link>
                <hr className="mt-1" />
                <Link to="/approvedPayment">
                  <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
                    Approved Payment
                  </li>
                </Link>
                <hr className="mt-1" />
                <Link to="/unpaidStudent">
                  <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
                    Unpaid Student
                  </li>
                </Link>
              </ul>
            </details>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
