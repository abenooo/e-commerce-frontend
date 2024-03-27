import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit mx-auto gap-10 font-medium py-4 text-blackish">
          <div className="navbar_link relative cursor-pointer">Home</div>
          <div className="navbar_link relative cursor-pointer">Categories</div>
          <div className="navbar_link relative cursor-pointer">{`Men's`}</div>
          <div className="navbar_link relative cursor-pointer">{`Women's`}</div>
          <div className="navbar_link relative cursor-pointer">Jewlery</div>
          <div className="navbar_link relative cursor-pointer">Perfume</div>
          <div className="navbar_link relative cursor-pointer">Blog</div>
          <div className="navbar_link relative cursor-pointer">Hot Offer</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
