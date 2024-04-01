// First, import useState and Link
"use client"
import React, { useState } from "react";
import Link from "next/link"; // Make sure this is the correct import
// Import specific icons from React Icons
import { IoClose, IoMenu } from "react-icons/io5";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="flex items-start font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          {/* <img src="../image-4.jpg" alt="logo" className="md:cursor-pointer h-10 w-10" /> */}
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex  relative hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* Assuming NavLinks renders additional nav items */}
          <NavLinks />
        </ul>
        {/* Mobile Menu */}
        <ul
          className={`absolute md:hidden bg-white w-full px-4 py-24 top-0 left-0 transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
