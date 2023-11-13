import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Drawer from "../Dashboard/SearchPanel/Drawer";

const AdminNoticesEdit = () => {

    const { noticeId } = useParams();

    // post method
    const [id, setid] = useState("");
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [pdf, setPdf] = useState("");
    const navigate = useNavigate();
  
    // handle control --------------------
    const handleIdChange = (e) => {
      setid(e.target.value);
    };
    const handletitleChange = (e) => {
      setTitle(e.target.value);
    };
    const handlesubjectChange = (e) => {
      setSubject(e.target.value);
    };
      const handledescriptionChange = (e) => {
        setDescription(e.target.value);
      };
    const handlepdfChange = (e) => {
      setPdf(e.target.files[0]);
    };
  
  
    // get  method ----------------------
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json",
        Authorization: "Bearer " + user.token,
      };
  
      axios
        .get(`http://127.0.0.1:8000/api/notice-edit/${noticeId}`, {
          headers: headers,
        })
        .then((response) => {
          const teacherData = response.data.user;
          setid(teacherData.id);
          setTitle(teacherData.title);
          setSubject(teacherData.subject);
          setDescription(teacherData.description);
          setPdf(teacherData.pdf);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [noticeId]);
  
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
      data.append("title", title);
      data.append("subject", subject);
      data.append("description", description);
      data.append("pdf", pdf);
      console.log(data);
      console.log("Selected pdf:", pdf);
      // post method --------------
      axios
        .post("http://127.0.0.1:8000/api/notice-update", data, {
          headers: headers,
        })
        .then((res) => {
          console.log("Data:", res.data);
          // to refresh to form ---------------
          setid("");
          setTitle("");
          setSubject("");
          setDescription("");
          setPdf("");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "updated Data successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/adminNotices");
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
               Notice Update 
              </h1>
              <hr className="border border-black mb-8" />
  
              {/* Edit form section  */}
              {/* form section  */}
              <form
                onSubmit={handleSubmit}
                className="bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
              >
  {/*id,  title and subject section  */}
   <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3">
  
  {/* title section   */}
                <div>
                  <label htmlFor="title">title:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    // placeholder="Add title"
                    type="text"
                    title="title"
                    id="title"
                    value={title}
                    onChange={handletitleChange}
                  />
                </div>
      {/* subject section  */}
      <div>
                    <label htmlFor="subject">subject:</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      title="subject"
                      id="subject"
                      value={subject}
                      onChange={handlesubjectChange}
                    />
                  </div>
  </div>
  
  
  {/* description section  */}
                  <div>
                    <label htmlFor="description">description:</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // placeholder="Add Mother title"
                      type="text"
                      title="description"
                      id="description"
                      value={description}
                      onChange={handledescriptionChange}
                    />
                  </div>
  
  {/* picture section  */}
                <div>
                  <label htmlFor="file">Pdf: </label> <br />
                  <input
                    className="file-input file-input-bordered file-input-primary w-full max-w-lg"
                    type="file"
                    title="file"
                    id="file"
                    // value={pdf}
                    onChange={handlepdfChange}
                  />
                </div>
  {/* id section   */}
  <div>
                  <label htmlFor="id"></label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    // placeholder="Add title"
                    type="hidden"
                    title="id"
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

export default AdminNoticesEdit;