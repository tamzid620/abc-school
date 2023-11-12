import './PaymentStatus.js'
import './PaymentStatus.css'
import user1 from '../../../../../assets/user/user-02.png'
import user2 from '../../../../../assets/user/user-03.png'
import user3 from '../../../../../assets/user/user-04.png'
import user4 from '../../../../../assets/user/user-05.png'
import user5 from '../../../../../assets/user/user-06.png'

const PaymentStatus1 = () => {
  return (
    <div className=' shadow-lg shadow-black rounded-xl mb-10'>
      <div className=' division col-12 bg-blue-900 mb-5 rounded-xl p-3' role="region" aria-labelledby="Cap1" tabIndex="0">
        <table className='table w-full rounded-xl flex items-center justify-center'>
          <h4 className="font-semibold text-2xl text-white mb-5">Payment Status</h4>
          <tr className='tr text-white font-semibold flex items-center justify-between'>
            <th className='th'> Client Name </th>
            <th className='th'> Order No </th>
            <th className='th'> Product Cost </th>
            <th className='th'> Project </th>
            <th className='th'> Payment Mode </th>
            <th className='th'> Start Date </th>
            <th className='th'> Payment Status </th>
          </tr>
          <tr className='tr flex items-center justify-between'>
            <td className='flex items-center'>
              <img className='w-[40px] h-[40px]' src={user1} alt="image" />
              <span className="ps-2">Henry Klein</span>
            </td>
            <td className='td'> 02312 </td>
            <td className='td'> $14,500 </td>
            <td className='td'> Dashboard </td>
            <td className='td'> Credit card </td>
            <td className='td'> 04 Dec 2019 </td>
            <td >
              <button className="flex items-center justify-between font-semibold text-success text-md sm: px-5 md:px-2 py-1 rounded-md hover:bg-green-500 hover:text-black border border-green-500">Approved</button>
            </td>
          </tr>
          <tr className='tr flex items-center justify-between'>
            <td className=' flex items-center '>
              <img className='w-[40px] h-[40px]' src={user2} alt="image" />
              <span className="ps-2">Estella Bryan</span>
            </td>
            <td className='td'> 02312 </td>
            <td className='td'> $14,500 </td>
            <td className='td'> Website </td>
            <td className='td'> Cash on delivered </td>
            <td className='td'> 04 Dec 2019 </td>
            <td>
              <button className="flex justify-center items-center font-semibold text-warning text-md sm: px-5 md:px-2 rounded-md hover:bg-yellow-500 hover:text-black border border-yellow-500">Pending</button>
            </td>
          </tr>
          <tr className='tr flex items-center justify-between'>
            <td className='td flex items-center justify-between'>
              <img className='w-[40px] h-[40px]' src={user3} alt="image" />
              <span className="ps-2">Lucy Abbott</span>
            </td>
            <td className='td'> 02312 </td>
            <td className='td'> $14,500 </td>
            <td className='td'> App design </td>
            <td className='td'> Credit card </td>
            <td className='td'> 04 Dec 2019 </td>
            <td >
              <button className="flex justify-center items-center font-semibold text-red-500 text-md sm: px-5 md:px-2 rounded-md hover:bg-red-500 hover:text-black border border-red-500">Rejected</button>
            </td>
          </tr>
          <tr className='tr flex items-center justify-between'>
            <td className='td flex items-center justify-between'>
              <img className='w-[40px] h-[40px]' src={user4} alt="image" />
              <span className="ps-2">Peter Gill</span>
            </td>
            <td className='td'> 02312 </td>
            <td className='td'> $14,500 </td>
            <td className='td'> Development </td>
            <td className='td'> Online Payment </td>
            <td className='td'> 04 Dec 2019 </td>
            <td>
              <button className="flex justify-center items-center font-semibold text-success text-md sm: px-5 md:px-2 rounded-md hover:bg-green-500 hover:text-black border border-green-500">Approved</button>
            </td>
          </tr>
          <tr className='tr flex items-center justify-between'>
            <td className='td flex items-center'>
              <img className='w-[40px] h-[40px]' src={user5} alt="image" />
              <span className="ps-2">Sallie Reyes</span>
            </td>
            <td className='td'> 02312 </td>
            <td className='td'> $14,500 </td>
            <td className='td'> Website </td>
            <td className='td'> Credit card </td>
            <td className='td'> 04 Dec 2019 </td>
            <td>
              <button className="flex justify-center items-center font-semibold text-success text-md sm: px-5 md:px-2 rounded-md hover:bg-green-500 hover:text-black border border-green-500">Approved</button>
            </td>
          </tr>

        </table>
      </div>
    </div>
  );
};

export default PaymentStatus1;