import backgroudphoto from "../../../../public/images/tree.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsFiletypePdf } from "react-icons/bs";

const Syllabus = () => {

  const [syllabuss, setSyllabuss] = useState([]);

  useEffect(() => {
    axios
      .get("https://example.com/api/allStudents")
      .then((res) => {
        setSyllabuss(res.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);
  console.log(syllabuss);

  // pdf section 
  const handlePdfDownload = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };


  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroudphoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          marginTop: "30px",
        }}
        className="flex justify-center"
      >
        {/* title tag */}
        <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center">
          <h1
            style={{ fontFamily: "Mooli, sans-serif" }}
            className="text-3xl text-white font-semibold"
          >
            Syllabus
          </h1>
          <img
            className="w-[350px] h-[50px]"
            src="../../../../public/icons/hrLine.png"
            alt=""
          />
        </div>
      </div>
        {/* syllabus section */}
        <div className="overflow-x-auto border mt-5 mx-3">
        <table className="table-auto w-full">
          {/* head */}
          <thead className="flex justify-between">
            <tr
              className="flex justify-between w-full font-bold"
              style={{ fontFamily: "Mooli, sans-serif" }}
            >
              <td className="w-1/2 ">Syllabi</td>
              <td className="w-1/6 ">Class</td>
              <td className="w-1/6 ">Action</td>
            </tr>
          </thead>
          <hr />
          <tbody>
            {syllabuss.map((syllabus) => {
              <tr key={syllabus.id} className="flex justify-between w-full">
                <td className="w-1/2 border-r-2">
                  <a
                    href={syllabus.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {syllabus.pdftitle}
                  </a>
                </td>
                <td className="w-1/4 border-r-2 flex justify-center">
                  {syllabus.wclass}
                </td>
                <td className="w-1/4 flex justify-center py-2">
                  <BsFiletypePdf
                   onClick={() => handlePdfDownload(syllabus.pdfUrl)}
                    className="p-1 rounded-lg text-red-500 hover:bg-red-500 hover:text-white"
                    color="red"
                    size={40}
                  />
                </td>
              </tr>;
            })}
            <tr className="flex justify-between w-full">
              <td className="w-1/2 border-r-2">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  class ten syllabus
                </a>
              </td>
              <td className="w-1/4 border-r-2 flex justify-center">
                10
              </td>
              <td className="w-1/4 flex justify-center py-2">
                <BsFiletypePdf
                 onClick={() => handlePdfDownload()}
                  className=" p-1 rounded-lg text-red-500 hover:bg-red-500 hover:text-white"
                  size={40}
                />
              </td>
            </tr>
          </tbody>
          <hr />
        </table>
      </div>
    </div>
  );
};

export default Syllabus;