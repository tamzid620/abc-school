import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Drawer from "../Dashboard/SearchPanel/Drawer";

const AdminTeachersEdit = () => {
  const { teacherId } = useParams();

  // post method
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  // handle control --------------------
  const handleIdChange = (e) => {
    setid(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }; 
  const handlesubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handlephoneNoChange = (e) => {
      setphoneNo(e.target.value);
    };
    const handledesignationChange = (e) => {
      setDesignation(e.target.value);
    };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  // get  method ----------------------
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    axios
      .get(`http://127.0.0.1:8000/api/teacher-edit/${teacherId}`, {
        headers: headers,
      })
      .then((response) => {
        const teacherData = response.data.user;
        setid(teacherData.id);
        setName(teacherData.name);
        setSubject(teacherData.subject);
        setDesignation(teacherData.designation);
        setEmail(teacherData.email);
        setphoneNo(teacherData.phoneNo);
        setImage(teacherData.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [teacherId]);

  // post section ----------------
  const handleSubmit = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    e.preventDefault();
    const data = new FormData();
    data.append("id", id);
    data.append("name", name);
    data.append("subject", subject);
    data.append("designation", designation);
    data.append("email", email);
    data.append("phoneNo", phoneNo);
    data.append("image", image);
    console.log(data);
    console.log("Selected Image:", image);
    // post method --------------
    axios
      .post("http://127.0.0.1:8000/api/teacher-update", data, {
        headers: headers,
      })
      .then((res) => {
        console.log("Data:", res.data);
        // to refresh to form ---------------
        setid("");
        setName("");
        setSubject("");
        setDesignation("");
        setEmail("");
        setphoneNo("");
        setImage("");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "updated Data successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/adminTeachers");
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
        w-full lg:-ms-[640px] md:-ms-[820px] sm: -ms-[400px]
       ">
        <div >
          <SearchPanel />
        </div>
        <div className="flex justify-center">
          <div className="mt-20 w-full">
            {/* AdminTeachersInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
             Teachers Update 
            </h1>
            <hr className="border border-black mb-8" />

            {/* Edit form section  */}
            {/* form section  */}
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
            >
{/*id,  name and emai section  */}
 <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3">

{/* name section   */}
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                  // placeholder="Add Name"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
{/* email section  */}
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // placeholder="Add Email"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
</div>

{/* phoneNo and subject section  */}
<div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3">
    {/* subject section  */}
                <div>
                  <label htmlFor="subject">subject:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={handlesubjectChange}
                  />
                </div>
{/* phone section  */}
<div>
                  <label htmlFor="phoneNo">Phone Number:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    name="phoneNo"
                    id="phoneNo"
                    value={phoneNo}
                    onChange={handlephoneNoChange}
                  />
                </div>
 </div>

{/* designation section  */}
                <div>
                  <label htmlFor="designation">designation:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // placeholder="Add Mother Name"
                    type="text"
                    name="designation"
                    id="designation"
                    value={designation}
                    onChange={handledesignationChange}
                  />
                </div>

{/* picture section  */}
              <div>
                <label htmlFor="file">Picture: </label> <br />
                <input
                  className="file-input file-input-bordered file-input-primary w-full max-w-lg"
                  type="file"
                  name="file"
                  id="file"
                  // value={image}
                  onChange={handleImageChange}
                />
              </div>
{/* id section   */}
<div>
                <label htmlFor="id"></label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                  // placeholder="Add Name"
                  type="hidden"
                  name="id"
                  id="id"
                  value={id}
                  onChange={handleIdChange}
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

export default AdminTeachersEdit;
