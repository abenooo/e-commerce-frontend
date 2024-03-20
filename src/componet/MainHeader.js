import React from "react";
import { BsSearch } from "react-icons/bs";
import {BiUser} from "react-icons/bi";
import {FiHeart} from "react-icons/fi"
import {HiOutlineShoppingBag} from "react-icons/hi"
const MainHeader = () => {
  return (
    <div>
      <div>
        {/* logo */}
        <div>Ecommerce</div>
        {/* search area */}
        <div>
          <input type="text" placeholder="search for product, brancd and many more" />
          <BsSearch size={20} />
        </div>

        {/* right side */}
        <div>
            <BiUser/>
            <div>
                <FiHeart/>
                <div>0</div>
            </div>
            <div>
                <HiOutlineShoppingBag/>
                <div>0</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
