import { IoSearchCircleSharp } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import { NotificationsMenu } from "./NotificationsMenu";
import { ProfileMenu } from "./ProfileMenu";

const SearchPanel = () => {
  return (
    <div>
<div className="flex justify-between items-center fixed
 bg-blue-900 border-b-2 border-blue-300
  lg:px-16 py-2 lg:-ms-9 md:ms-[70px] sm: px-28 sm: ms-10 
  z-10">
      {/* search section  */}
      <div className=" sm: hidden lg:flex md:flex">
        <input type="text" placeholder="Search Setting" className="input input-bordered input-success lg:w-[700px] md:w-[350px]" />
        <button
          title="Wishlist"
          className=" text-white hover:text-blue-300 font-bold px-3 py-1
      rounded-md"> <IoSearchCircleSharp className="w-[30px] h-[30px]" />
        </button>
      </div>


      {/* icon and login section  */}
      <div className="flex gap-5">
        <div className="flex items-center">

          {/* message icon  */}
          <button
            title="Wishlist"
            className=" text-white hover:text-blue-300 font-bold px-3 py-1
      rounded-md"> <BiSolidMessageRounded className="w-[25px] h-[25px]" />
          </button>

          {/* notification icon  */}
          <NotificationsMenu />
        </div>

        {/* profile section  */}
        <ProfileMenu />
      </div>
</div>

    </div>
  );
};

export default SearchPanel;