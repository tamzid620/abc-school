import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Drawer from "../Dashboard/SearchPanel/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PendingStudent = () => {
  const [pendStudents, setPendStudents] = useState([]);

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
        .get(`http://127.0.0.1:8000/api/pending-student-list`, {
          headers: headers,
        })
        .then((res) => {
          setPendStudents(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [navigate]);
  console.log(pendStudents.student);

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
        setPendStudents((prevStudents) =>
          prevStudents.filter((student) => student.student_id !== studentId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Student deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting student",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  // approval section
  const handleApprove = (studentId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    axios
      .get(`http://127.0.0.1:8000/api/student-approve/${studentId}`, {
        headers: headers,
      })
      .then(() => {
        setPendStudents((prevStudents) =>
          prevStudents.filter((student) => student.student_id !== studentId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Student deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting student",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };


  return (
    <div className="flex justify-between">
      <div className="">
        <Drawer />
      </div>
      {/* table div  */}
      <div className="">
        <div className="lg:-ms-[290px] md:-ms-20 ">
          <SearchPanel />
        </div>
        <div className="flex justify-center">
          <div className="mt-20 me-28">
            {/* AdminStudentInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              Pending Student
            </h1>
            <hr className="border border-black mb-8" />

            {/* table section  */}
            <div className="overflow-x-auto lg:ms-0 md:ms-0 ">
              {/* sm: ms-[450px] */}
              {/* search and add field  */}
              <div className="flex justify-between items-center">
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
              </div>
              <table className="table table-lg table-pin-rows table-pin-cols border">
                {/* head */}
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Roll</th>
                    <th>Registration</th>
                    <th>Class</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pendStudents.student &&
                    pendStudents.student.map((student, index) => (
                      <tr key={student.id}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={student.image} alt="" />
                          </div>
                        </td>
                        <td>{student.name}</td>
                        <td>{student.rollNo}</td>
                        <td>{student.regNo}</td>
                        <td>{student.class}</td>
                        <td className="flex gap-2">
                          {/* Edit button  */}
                          <Link to={`/AdminStudentEdit/${student.id}`}>
                            <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">
                              Edit
                            </button>
                          </Link>
                          {/* Approve button  */}
                          <button 
                          onClick={() => handleApprove(student.id)}
                          className="btn-xs bg-blue-500 rounded-lg font-semibold uppercase hover:bg-blue-800 hover:text-white">
                            Approve
                          </button>
                          {/* Delete button  */}
                          <button
                            onClick={() => handleDelete(student.id)}
                            className="btn-xs bg-red-500 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  {/* Edit button  */}
                  <Link to="/studentEdit">
                    <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">
                      Edit
                    </button>
                  </Link>
                </tbody>
              </table>
            </div>
            {/* pagination here  */}
            <div className="flex justify-center">
              <div className="join my-10">
                <button className="join-item btn">1</button>
                <button className="join-item btn">2</button>
                <button className="join-item btn btn-disabled">...</button>
                <button className="join-item btn">99</button>
                <button className="join-item btn">100</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingStudent;
