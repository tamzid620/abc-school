import { Link, useNavigate } from "react-router-dom";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Drawer from "../Dashboard/SearchPanel/Drawer";

const AdminSyllabus = () => {
  const [adminSyllabuss, setAdminSyllabuss] = useState({ syllabus: [] });

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const syllabussPerPage = 5;

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
// get syllabus data ---------------
      axios
        .get(`http://127.0.0.1:8000/api/syllabus-listApi`, {
          headers: headers,
        })
        .then((res) => {
          setAdminSyllabuss(res.data);
        })
        .catch((error) => {
          setAdminSyllabuss(error);
        });
    }
  }, [navigate]);

  console.log(adminSyllabuss.syllabus);

  // delete section
  const handleDelete = (syllabusId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    axios
      .delete(`http://127.0.0.1:8000/api/syllabus-delete/${syllabusId}`, {
        headers: headers,
      })
      .then(() => {
        setAdminSyllabuss((prevSyllabuss) =>
          prevSyllabuss.filter((syllabus) => syllabus.syllabus_id !== syllabusId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Routine deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload()
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting Routine",
          text: error.message,
          showConfirmButton: true,
        });
        navigate("/adminSyllabuss");
      });
  };
  // pagination section -----------
  const indexOfLastSyllabus = currentPage * syllabussPerPage;
  const indexOfFirstSyllabus = indexOfLastSyllabus - syllabussPerPage;
  const currentSyllabuss = adminSyllabuss.syllabus.slice(
    indexOfFirstSyllabus,
    indexOfLastSyllabus
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
      <div
        className="
        w-full lg:-ms-[640px] md:-ms-[820px] sm: -ms-[400px]"
      >
        <div>
          <SearchPanel />
        </div>
        <div className="flex justify-center">
          <div className="mt-20 w-full ">
            {/* AdminsyllabusInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              All syllabi
            </h1>
            <hr className="border border-black mb-8" />

            {/* add syllabus list section  */}
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
                  <Link to="/adminSyllabussAdd">
                    <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">
                      Add
                    </button>
                  </Link>
                </div>
              </div>

              {/* tabel section  */}
              <table className="table ">
                {/* head */}
                <thead>
                <tr className="flex justify-between w-full font-bold">
                    <th>Title</th>
                    <th>Class</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {currentSyllabuss.map((syllabus) => (
    <tr key={syllabus.id} className="flex justify-between w-full">
      <td className="w-1/2 ">
        <a
          href={syllabus.pdflink} 
          target="_blank"
          rel="noopener noreferrer"
        >
          {syllabus.subject}
        </a>
      </td>
      <td className="w-1/4  flex justify-center">{syllabus.wclass}</td>
      <td className="w-1/4 flex justify-center py-2">
        <div className="flex gap-2">
          {/* Edit button  */}
          <Link
            to={`/adminSyllabussEdit/${syllabus.id}`}
          >
            <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">
              Edit
            </button>
          </Link>
          {/* Delete button   */}
          <button
            onClick={() => handleDelete(syllabus.id)}
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
              {/* pagination section ------------- */}
              <div className="pagination my-10 flex justify-center">
                {Array.from(
                  {
                    length: Math.ceil(
                      adminSyllabuss.syllabus.length / syllabussPerPage
                    ),
                  },
                  (_, index) => (
                    <button
                      key={index}
                      className={`btn btn-sm ${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-white"
                      }`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AdminSyllabus;