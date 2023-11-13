import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Drawer from "../Dashboard/SearchPanel/Drawer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminNoticesAdd = () => {


    const [adminNotice, setAdminNotice] = useState([])
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [pdf, setPdf] = useState("");
  
    // handle control --------------------
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
    const handleSubjectChange = (e) => {
      setSubject(e.target.value);
    }; 
      const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
      };
    const handlePdfChange = (e) => {
      setPdf(e.target.files[0]);
    };
  
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
          .get(`http://127.0.0.1:8000/api/login`, {
            headers: headers,
          })
          .then((res) => {
            setAdminNotice(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [navigate]);
    console.log(adminNotice);
  
    // handle submit button ----------------
  const handleSubmit = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };
  
    e.preventDefault();
    const data = new FormData();
    data.append("title",title);
    data.append("subject", subject);
    data.append("description", description);
    data.append("pdf", pdf);
    console.log(data);
    console.log("Selected pdf:", pdf);
    // post method --------------
    axios
      .post("http://127.0.0.1:8000/api/add-notice", data, {
        headers: headers,
      })
      .then((res) => {
        console.log("Data:", res.data);
        // to refresh to form ---------------
        setTitle("");
        setSubject("");
        setDescription("");
        setPdf("");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data Added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/adminNotices')
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: ("An error occurred:", error),
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  

    return (
        <div className="flex justify-between">
        <div className="w-full">
          <Drawer />
        </div>
        {/* form div  */}
        <div className="
          w-full lg:-ms-[640px] md:-ms-[820px] sm: -ms-[400px]">
          <div className="">
            <SearchPanel />
          </div>
          <div className="flex justify-center mt-20">
            <div className="mt-20 w-full">
              {/* AdminStudentInfo section  */}
              <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              add Notice
              </h1>
              <hr className="border border-black mb-8" />
  
{/* Edit form section  */}
              {/* form section  */}
              <form
                onSubmit={handleSubmit}
                className="bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
              >
  {/* title and subject section  */}
   <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3">
  
  {/* title section   */}
                <div>
                  <label htmlFor="title">Title:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    // placeholder="Add Name"
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>
  {/* subject section  */}
                  <div>
                    <label htmlFor="subject">Subject:</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black mb-3"
                      // placeholder="Add Email"
                      type="subject"
                      name="subject"
                      id="subject"
                      value={subject}
                      onChange={handleSubjectChange}
                    />
                  </div>
  </div>
  
  
  {/* Discription section  */}
                  <div>
                    <label htmlFor="description">description:</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // placeholder="Add Mother Name"
                      type="text"
                      name="description"
                      id="description"
                      value={description}
                      onChange={handleDescriptionChange}
                    />
                  </div>
  
  {/* pdf section  */}
                <div>
                  <label htmlFor="file">PDF Link: </label> <br />
                  <input
                    className="file-input file-input-bordered file-input-primary w-full"
                    type="file"
                    name="file"
                    id="file"
                    // value={image}
                    onChange={handlePdfChange}
                  />
                </div>

  
                <button
                  className="bg-blue-300 hover:bg-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-3"
                  type="submit"
                >
                  Save
                </button>
  
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdminNoticesAdd;