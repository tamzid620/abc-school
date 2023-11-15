import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Drawer from "../Dashboard/SearchPanel/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PendingPayment = () => {
  const [pendPayments, setPendPayments] = useState([]);
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
        .get(`http://127.0.0.1:8000/api/pending-payment-list`, {
          headers: headers,
        })
        .then((res) => {
          setPendPayments(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [navigate]);
  console.log(pendPayments.payment);

  // approval section
  const handleApprove = (paymentId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    axios
      .get(`http://127.0.0.1:8000/api/payment-approve/${paymentId}`, {
        headers: headers,
      })
      .then(() => {
        setPendPayments((prevPayments) =>
          prevPayments.filter((payment) => payment.payment_id !== paymentId)
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

  // delete section
  const handleDecline = (paymentId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    axios
      .delete(`http://127.0.0.1:8000/api/delete-payment/${paymentId}`, {
        headers: headers,
      })
      .then(() => {
        setPendPayments((prevPayments) =>
          prevPayments.filter((payment) => payment.payment_id !== paymentId)
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
              Pending Payment
            </h1>
            <hr className="border border-black mb-8" />

            {/* table section  */}
            <div className="overflow-x-auto lg:ms-0 md:ms-0 ">
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
                  {pendPayments.payment &&
                    pendPayments.payment.map((payment, index) => (
                      <tr key={payment.id}>
                        <td>{index + 1}</td>
                        <td>{payment.name}</td>
                        <td>{payment.class}</td>
                        <td>{payment.regNo}</td>
                        <td>{payment.transactionId}</td>
                        <td>{payment.amount}</td>
                        <td>{payment.month}</td>
                        <td className="flex gap-2">
                          {/* Approve button  */}
                          <button
                            onClick={() => handleApprove(payment.id)}
                            className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white"
                          >
                            Approve
                          </button>
                          {/* Delete button  */}
                          <button
                            onClick={() => handleDecline(payment.id)}
                            className="btn-xs bg-red-500 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white"
                          >
                            Decline
                          </button>
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

export default PendingPayment;
