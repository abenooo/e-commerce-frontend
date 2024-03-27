"use client"
import React,{useState} from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
const navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    // <nav className="bg-white">
    //   <div className="flex items-center font-medium justify-around">
    //      {/* <div className="container"> */}
    //       <div className="flex w-fit mx-auto gap-10 font-medium py-4 text-blackish">
    //         <div className="flex items-center font-medium justify-around">
    //         <div className="z-50 p-5 md:w-auto w-full flex justify-between">
    //           <Image  src={logo} alt="logo" className="md:cursor-pointer h-9"/>
    //           <div className="text-3xl">
    //           <IoMenuOutline />
    //           <h1>asdfhe</h1>
    //           </div>
    //           </div>
    //         <ul className="md:flex hidden gap-10">
    //           <li>
    //             <Link href="/" className="navbar_link relative cursor-pointer">
    //               Home
    //             </Link>
    //           </li>
    //              <NavLinks className="navbar_link relative cursor-pointer"/>

    //         </ul>

    //         {/* Mobile nav */}
    //     <ul
    //       className={`
    //     md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
    //     duration-500
    //     `}
    //     >
    //       <li>
    //       <Link href="/" className="navbar_link relative cursor-pointer">
    //               Home
    //             </Link>
    //       </li>
    //       <NavLinks />

    //     </ul>
    //       </div>
    //     </div>
    //     </div>
    //  </nav>
    <nav className="bg-white sticky top-0 z-50">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Image
            src="/asset/headphone.png" // Path relative to the public folder
            alt="logo"
            width={100}
            height={500} 
            className="md:cursor-pointer h-9"
          />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoCloseOutline /> : <IoMenuOutline />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500  ${open ? "left-0" : "left-[-100%]"}
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

export default navbar;
