import { Link, useNavigate } from "react-router-dom";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Drawer from "../Dashboard/SearchPanel/Drawer";

const AdminTeachers = () => {

// const [adminTeachers, setAdminTeachers] = useState([])
const [adminTeachers, setAdminTeachers] = useState({ teacher: [] });

const navigate = useNavigate();
const [currentPage, setCurrentPage] = useState(1);
const teachersPerPage = 10;


useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "You have to Login first",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/adminlogin");
  } else {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    axios
      .get(`info.json`, {
        headers: headers,
      })
      .then((res) => {
        setAdminTeachers(res.data);
      })
      .catch((error) => {
        setAdminTeachers(error);
      });
  }
}, [navigate]);

console.log(adminTeachers.teacher);

// delete section
  const handleDelete = (teacherId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    axios
      .delete(`http://127.0.0.1:8000/api/delete-teacher/${teacherId}`, {
        headers: headers,
      })
      .then(() => {
        setAdminTeachers((prevTeachers) =>
          prevTeachers.filter((teacher) => teacher.teacher_id !== teacherId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Teacher deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/adminTeachers");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting Teacher",
          text: error.message,
          showConfirmButton: true,
        });
        navigate("/adminTeachers");
      });
  };

  const indexOfLastTeacher = currentPage * teachersPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
  const currentTeachers = adminTeachers.teacher.slice(
    indexOfFirstTeacher,
    indexOfLastTeacher
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-between">
      <div className=" w-full">
        <Drawer />
      </div>
      {/* table div  */}
      <div className="
        w-full lg:-ms-[640px] md:-ms-[820px] sm: -ms-[400px]">
        <div>
          <SearchPanel/>
        </div>
        <div className="flex justify-center">
          <div className="mt-20 w-full ">
            {/* AdminTeacherInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              All Teachers
            </h1>
            <hr className="border border-black mb-8" />


            {/* add teachers list section  */}
            <div className="overflow-x-auto border ">
              {/* search and add field  */}
              <div className="flex justify-between items-center mx-3 mt-5">
                {/* search input  */}
                <div className="form-control ms-3 my-3">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search…"
                      className="input input-bordered"
                    />
                    <button className="btn btn-square">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* add button  */}
                <div>
                  <Link to="/adminTeachersAdd"><button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">
                    Add
                  </button></Link>
                </div>
              </div>

{/* tabel section  */}
              <table className="table ">
                {/* head */}
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody >
{currentTeachers.map((teacher) => (
                  <tr key={teacher.id}>
                    <div className="mask mask-squircle w-12 h-12">
                      <td> <img src={teacher.image}alt="teahcer's photo"/> </td>
                    </div>

                    <td>{teacher.name}</td>
                    <td>{teacher.designation}</td>
                    <td>{teacher.email}</td>
                    <td>
                      <div className="flex gap-2">
                          {/* Edit button  */}
                          <Link to=
                          {`/adminTeachersEdit/${teacher.id}`}
                          // "/adminTeachersEdit"
                          >
                            <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">
                              Edit
                            </button>
                          </Link>
                          {/* Delete button   */}
                          <button
                          onClick={() => handleDelete(teacher.id)}
                            className="btn-xs bg-red-500 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white"
                          >
                            Delete
                          </button>
                      </div>
                        </td>
                  </tr>
))}
                </tbody>
              </table>
              <div className="pagination my-10 flex justify-center">
                {Array.from({ length: Math.ceil(adminTeachers.teacher.length / teachersPerPage) }, (_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white"}`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTeachers;
