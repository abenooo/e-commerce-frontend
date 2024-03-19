import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
const Header = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div></div>
      <div>
        <div>
          <div>
            {/* first div */}
            <div>
              <BsFacebook />
            </div>
            <div>
              <BsTwitter />
            </div>
            <div>
              <BsInstagram />
            </div>
            <div>
              <BsLinkedin />
            </div>
          </div>

          {/* second div */}

          <div className=" text-gray-500 text-mal">
            <strong>FREE SHIPPING</strong>
            THIS WEEK ORDER OVER - $55
          </div>

          {/* third div */}
          <div>
            <select name="currency" id="currency">
              <option value="usd">USD $</option>
              <option value="pound">Pound £ </option>
              <option value="euro">Euro € </option>
            </select>

            <select name="language" id="language">
              <option value="Amharic">Amharic</option>
              <option value="english">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
