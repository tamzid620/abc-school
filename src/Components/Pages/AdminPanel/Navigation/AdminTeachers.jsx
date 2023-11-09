import { Link, useNavigate } from "react-router-dom";
import Drawer from "../Dashboard/SearchPanel/Drawer";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AdminTeachers = () => {

const [adminTeachers, setAdminTeachers] = useState([])
const navigate = useNavigate();
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
  const handleDelete = (studentId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    axios
      .delete(`http://127.0.0.1:8000/api/delete-student/${studentId}`, {
        headers: headers,
      })
      .then(() => {
        setAdminTeachers((prevStudents) =>
          prevStudents.filter((student) => student.student_id !== studentId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Student deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/adminTeachers");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting student",
          text: error.message,
          showConfirmButton: true,
        });
        navigate("/adminTeachers");
      });
  };

  return (
    <div className="flex justify-between">
      <div className=" w-full">
        <Drawer />
      </div>
      {/* table div  */}
      <div className=" w-full lg:-ms-[640px] md:-ms-[820px]">
        <div>
          <SearchPanel/>
        </div>
        <div className="flex justify-center">
          <div className="mt-20 w-full lg:z-10 md:z-0 sm: z-0">
            {/* AdminStudentInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              Add Teachers
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
                  <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">
                    Add
                  </button>
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
{adminTeachers.teacher && adminTeachers.teacher.map((teacher) => (
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

            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AdminTeachers;
