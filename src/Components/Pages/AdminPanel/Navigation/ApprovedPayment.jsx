import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Drawer from "../Dashboard/SearchPanel/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ApprovedPayment = () => {
  const [apprPayments, setApprPayments] = useState([]);
  const [selectedClass, setSelectedClass] = useState("Class 1");
  const [filteredPayments, setFilteredPayments] = useState([]);
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
        .get(`http://127.0.0.1:8000/api/approve-payment-list`, {
          headers: headers,
        })
        .then((res) => {
          setApprPayments(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [navigate]);
  console.log(apprPayments.payment);

  // approval section
  const handleDetail = (studentId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    axios
      .get(`http://127.0.0.1:8000/api/payment-detail/${studentId}`, {
        headers: headers,
      })
      .then(() => {
        setApprPayments((prevPayments) =>
          prevPayments.filter((payment) => payment.studentId !== studentId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "payment deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting payment",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  // handle class change --------
  const handleClassChange = (event) => {
    const selectedClass = event.target.value;
    setSelectedClass(selectedClass);

    const filtered = apprPayments.payment.filter(
      (payment) => payment.class === selectedClass
    );
    setFilteredPayments(filtered);
  };

  return (
    <div className="flex justify-between">
      <div className="w-full">
        <Drawer />
      </div>
      {/* table div  */}
      <div className=" w-full lg:-ms-[640px] md:-ms-[820px] sm: -ms-[400px]">
        <div>
          <SearchPanel />
        </div>
        <div className="flex justify-center">
          <div className="mt-20 mx-2  w-full">
            {/* AdminpaymentInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              Approved Payment
            </h1>
            <hr className="border border-black mb-8" />

            {/* table section  */}
            <div className="overflow-x-auto lg:ms-0 md:ms-0 ">

              {/* search and add field  */}
              <div className="flex justify-between items-center">
                {/* dropdown filter  */}
              <div>
              <select
                name=""
                id=""
                value={selectedClass}
            onChange={handleClassChange}
                className=" px-3 py-1 rounded-lg text-sm font-medium outline-none"
              >
                <option value="class 1">Class 1</option>
                <option value="class 2">Class 2</option>
                <option value="class 3">Class 3</option>
                <option value="class 4">Class 4</option>
                <option value="class 5">Class 5</option>
                <option value="class 6">Class 6</option>
                <option value="class 7">Class 7</option>
                <option value="class 8">Class 8</option>
                <option value="class 9">Class 9</option>
                <option value="class 10">Class 10</option>
              </select>
              </div>
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
              <table className="table ">
                {/* head */}
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Registration</th>
                    <th>Class</th>
                    <th>Transaction id</th>
                    <th>Amount</th>
                    <th>Month</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayments.length > 0
            ? filteredPayments.map((payment, index) => (
                      <tr key={payment.id}>
                        <td>{index + 1}</td>
                        <td>{payment.name}</td>
                        <td>{payment.class}</td>
                        <td>{payment.regNo}</td>
                        <td>{payment.transactionId}</td>
                        <td>{payment.amount}</td>
                        <td>{payment.month}</td>
                        <td className="flex gap-2">
                        
                           {/* Details button  */}
                           <Link to={`/paymentHistory/${payment.studentId}`}>
                            <button className="btn-xs bg-blue-500 rounded-lg font-semibold uppercase hover:bg-blue-800 hover:text-white">
                            Payment history
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))
                    : <tr>
                    <td colSpan="8" className="text-center">
                      No payments for the selected class.
                    </td>
                  </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedPayment;
