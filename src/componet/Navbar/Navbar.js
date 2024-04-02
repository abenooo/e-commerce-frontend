"use client";
import React, { useState } from "react";
import Link from "next/link"; 
import { IoClose, IoMenu } from "react-icons/io5";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="flex items-start font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoClose /> : <IoMenu />}
          </div>
        </div>
        <ul className="md:flex text-gray-500 text-[14px] relative hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <NavLinks />
        </ul>
        {/* Mobile Menu */}
        <ul
          className={`absolute md:hidden bg-white w-full px-4 py-24 top-0 left-0 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <li className="text-gray-500 text-[12px]">
            <Link href="/" className="text-xs">Home</Link>
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
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
