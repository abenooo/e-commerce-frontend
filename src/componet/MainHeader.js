import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
const MainHeader = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        {/* logo */}
        <div className="font-bold text-3xl text-center pb-4 sm:pb-0 text-blackish">
          የኛ Shop{" "}
        </div>
        {/* search area */}
        <div className="width-100 sm:w-[300] md:w-[70%] relative ">
          <input
            className="border-gray-200 border py-2 px-4 rounded-lg w-full "
            type="text"
            placeholder="search for product, brancd and many more"
          />
          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 cursor-pointer text-gray-400"
            size={20}
          />
        </div>

        {/* right side */}

        <div className="hidden lg:flex text-gray-500 text-[30px] gap-4">
          <BiUser />
          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
