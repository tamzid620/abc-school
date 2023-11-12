import AmountSecion from "../AmountSecion/AmountSecion";
import EventList from "../EventList/EventList";
import NumberStatus from "../NumberStatus/NumberStatus";
import PaymentStatus1 from "../PaymentStatus/PaymentStatus1";
import SearchPanel from "../SearchPanel/SearchPanel";
import Transaction from "../Transaction/Transaction";

const DashBoardBody = () => {
  return (
    <div className="text-white ">
      {/* search panel  */}
      <div className="ms-4 ">
        <SearchPanel />
      </div>
      {/* rest of the body  */}
      <div className="me-12 ">
        <div className="mt-24 mb-10 w-full max-w-screen-lg"><NumberStatus /></div>
        <div className="lg:flex  gap-3 w-full max-w-screen-lg">
          <div className="col-span-4 lg:col-span-4 sm: mb-10 "><Transaction /></div>
          <div className="col-span-8 lg:col-span-8 mb-10"><EventList /></div>
        </div>
        <div className="w-full max-w-screen-lg mb-10"><AmountSecion /></div>
        <div className="w-full max-w-screen-lg mb-10"><PaymentStatus1 /></div>
      </div>
    </div>
  );
};

export default DashBoardBody;