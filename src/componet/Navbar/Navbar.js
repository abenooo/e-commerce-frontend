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
    <nav className="bg-white sticky top-0 z-50 shadow">
      <div className="flex items-center justify-between p-5 max-w-6xl mx-auto">
        {/* Assuming you have a logo or simply use text for branding */}
        <div className="font-bold text-xl">
          <Link href="/">Logo</Link>
        </div>
        {/* Toggler Icon */}
        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <IoMenu />}
        </div>
        {/* Desktop Menu Items */}
        <ul className={`md:flex hidden relative uppercase items-center gap-8 font-medium`}>
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
