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
          
          <div
            aria-label="primary"
            className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
          </div>
          <div
            aria-label="primary"
            className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
          >
            <div className="relative group">
              <button className="navbar_link relative cursor-pointer">
                <span>Fashion</span>
              </button>
              <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                <div className="px-2 pt-2 pb-4 bg-gray-200 shadow-lg">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <p>men's</p>
                    <br></br>
                    <p>women's</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="navbar_link relative cursor-pointer ml-5">
                <span>Electronice</span>
              </button>
              <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                <div className="px-2 pt-2 pb-4 bg-gray-200 shadow-lg">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <p>dropdown content here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="primary" className="bg-white shadow-lg"></nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
