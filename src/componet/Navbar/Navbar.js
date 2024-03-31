"use client"
import React, { useState } from "react";
import { Link } from "next/link";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="flex items-start font-medium justify-around">
        {/* <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src="../image-4.jpg" alt="logo" className="md:cursor-pointer h-10 w-10" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div> */}
        <ul className="md:flex  relative hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <li to="/" className="py-7 px-3 inline-block">
              Home
            </li>
          </li>
          <NavLinks />
        </ul>
      
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <li to="/" className="py-7 px-3 inline-block">
              Home
            </li>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
