import React, { useState } from "react";
import { Link } from "next/link";
import { links } from "./Mylinks";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3  text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {heading === link.name ? <IoChevronUp /> : <IoChevronDown />}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <IoChevronDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute w-full left-0 top-20 hidden group-hover:md:block hover:md:block border-4 border-gray-100 ">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-4 gap-5">
                    <div className="col-span-2 grid grid-cols-2 gap-5">
                      {link.sublinks.map((mysublinks, index) => (
                        <div key={index} className="col-span-1">
                          <h1 className="text-lg font-semibold">
                            {mysublinks.Head}
                          </h1>
                          <ul>
                            {mysublinks.sublink.map((slink, subIndex) => (
                              <li
                                key={subIndex} // Added unique key
                                className="text-sm text-gray-600 my-2.5 hover:text-primary"
                              >
                                <a href={slink.link}>{slink.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="col-span-2">
                      <img
                        src="../image-4.jpg"
                        alt="logo"
                        className="md:cursor-pointer rounded-lg h-[300px] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
                    onClick={() => {
                      subHeading === slinks.Head
                        ? setSubHeading("")
                        : setSubHeading(slinks.Head);
                    }}
                  >
                    {slinks.Head}
                    <span className="text-xl md:hidden inline">
                      {subHeading === slinks.Head ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaChevronDown />
                    </span>
                  </h1>

                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, index) => (
                      <li key={index} className="py-3 pl-14">
                        <a href={slink.link}>{slink.name}</a>{" "}
                        {/* Use <a> instead of <li> */}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;