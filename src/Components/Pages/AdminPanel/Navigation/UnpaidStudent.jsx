import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Drawer from "../Dashboard/SearchPanel/Drawer";

const UnpaidStudent = () => {
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
            Unpaid Student
            </h1>
            <hr className="border border-black mb-8" />
            {/* Information section  */}
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnpaidStudent;
